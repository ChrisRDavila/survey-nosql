import React, { useState, useEffect } from "react";
// import SurveyForm from "./SurveyForm";
import SurveyDetail from "./SurveyDetail";
import SurveyList from "./SurveyList";
// import PropTypes from "prop-types";
import NewSurvey from "./NewSurvey";
import EditSurveyForm from "./EditSurveyForm";
import DashBoard from "./Dashboard";
import { db, auth } from './../firebase.js';
import { collection, addDoc, updateDoc, deleteDoc, query, onSnapshot, where, getFirestore, doc, getDoc } from "firebase/firestore";
// import ResponseForm from "./ResponseForm";

function SurveyControl(props){

  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
  const [mainSurveyList, setMainSurveyList] = useState([]);
  const [selectedSurvey, setSelectedSurvey] = useState(null);
  const [editSurvey, setEditSurvey] = useState(null);
  const [error, setError] = useState(null);
  const [dashboardDisplay, setDashboardDisplay] = useState(false);
  const [responseList, setresponseList] = useState([]);
  const [questionsList, setQuestionsList] = useState([]);
  // const [responseForm, setResponseForm] = useState([]);

  useEffect(() => {
    const unSubscribe = onSnapshot(
      collection(db, "surveys"),
      (snapshot) => {
        const surveys = [];
        snapshot.forEach((doc) => {
          surveys.push({ ...doc.data().creatorEmail,
            title: doc.date().title,
            questions: doc.data().questions,
            id: doc.id
          });
        });
        setMainSurveyList(surveys);
      },
      (error) => {
        setError(error.message);
      }
    );
    return () => unSubscribe();
    }, []);

    useEffect(() => {
      if (!selectedSurvey) return;
      const selectedId = selectedSurvey.id;
      const q = query(collection(db, "responses"), where("surveyId", "==", selectedId));

      const unSubscribe = onSnapshot(q, (querySnapshot) => {
        const responses = [];
        querySnapshot.forEach((doc) => {
          responses.push({ ...doc.data(), id: doc.id });
        });
        setresponseList(responses);
      });
      return () => {
      if (unSubscribe) unSubscribe();
    };
  }, [selectedSurvey]);

  const updateQuestionList = (id) => {
    (async () => {
      const db = getFirestore();
      const docRef = doc(db, "surveys", id);

      try {
        const docSnap = await getDoc(docRef);
          setQuestionsList(docSnap.data().questions);
        } catch (error) {
          console.log("No such document!");
        }
        console.log("updated questionlist")
      })();
  };
  




  const handleClick = () => {
    if (selectedSurvey != null) {
      setSelectedSurvey(null);
      setEditSurvey(null);
    } else {
      setFormVisibleOnPage(true);
    }
  }

  const handleDashboardClick = () => {
    setDashboardDisplay(true);
  };

  const handleDeletingSurvey = async (id) => {
    const newMainSurveyList = mainSurveyList.filter((survey) => survey.id !== id);
    await deleteDoc(doc(db, "surveys", id));
    setMainSurveyList(newMainSurveyList);
    setSelectedSurvey(null);
  }

  const handleEditClick = () => {
    setEditSurvey(true);
  }

  const handleEditingSurveyInList = async (surveyToEdit) => {
    const editedMainSurveyList = mainSurveyList
      .filter((survey) => survey.id !== selectedSurvey.id)
      .concat(surveyToEdit);
    await updateDoc(doc(db, "surveys", selectedSurvey.id), surveyToEdit);
    setMainSurveyList(editedMainSurveyList);
    setEditSurvey(false);
    setSelectedSurvey(null);
  }

  const handleAddingNewSurveyToList = async (newSurveyData) => {
    await addDoc(collection(db, "surveys"), newSurveyData);
    setFormVisibleOnPage(false);
  }

  const handleChangingSelectedSurvey = (id) => {
    const selectedSurvey = mainSurveyList.filter((survey) => survey.id === id)[0];
    setSelectedSurvey(selectedSurvey);
    updateQuestionList(id);
  }

  const handleSendingSurvey = async (responseAnswers) => {
    const result = await addDoc(collection(db, "responses"), responseAnswers);
    setSelectedSurvey(null);

    const newMainSurveyList = mainSurveyList.filter((survey) => survey.id !== selectedSurvey.id);
    setMainSurveyList(newMainSurveyList);
    setSelectedSurvey(null);

    const newResponseList = responseList.filter((response) => response.id !== result.id);
    setresponseList(newResponseList);
    setSelectedSurvey(null);
  };


  let currentlyVisibleState = null;
  let buttonText = null;

  if (auth.currentUser == null) {
    return (
      <React.Fragment>
        <h1>You must be signed in to access the queue.</h1>
      </React.Fragment>
    )
  } else if (auth.currentUser != null) {

    // let currentlyVisibleState = null;
    // let buttonText = null; 

  if (error) {
      currentlyVisibleState = <p>There was an error: {error}</p>
  } else if (editSurvey) {
    currentlyVisibleState = <EditSurveyForm
      survey={selectedSurvey}
      onEditSurvey={handleEditingSurveyInList} />
    buttonText = "Return to Survey List";
  } else if (selectedSurvey != null && questionsList) {
    currentlyVisibleState = <SurveyDetail
      survey={selectedSurvey}
      responseAnswers={responseList}
      currentQuestions={questionsList}
      currentUserEmail={props.userEmail}
      onClickingSend={handleSendingSurvey}
      onClickingDelete={handleDeletingSurvey}
      onClickingEdit={handleEditClick} />
    buttonText = "Return to Survey List";
  } else if (formVisibleOnPage) {
    currentlyVisibleState = <NewSurvey
      onNewSurveyCreation={handleAddingNewSurveyToList}
      currentUserEmail={props.userEmail}/>
    buttonText = "Return to Survey List";
  // } else if (responseForm) {
  //   currentlyVisibleState = <ResponseForm
  //   onNewSurveyCreation={handleAddingNewSurveyToList}
  //   currentUserEmail={props.userEmail}/>
  } else if (dashboardDisplay) {
    currentlyVisibleState = <DashBoard
      currentUserEmail={props.userEmail}
      surveyList={mainSurveyList}
      onSurveySelection={handleChangingSelectedSurvey}/>;
    buttonText = "Return to Survey List";
  } else {
    currentlyVisibleState = <SurveyList
      onSurveySelection={handleChangingSelectedSurvey}
      surveyList={mainSurveyList}
      onDashboardClick={handleDashboardClick} />;
    buttonText = "Add Survey";
  }
}

  return (
    <React.Fragment>
      {currentlyVisibleState}
      {props.userEmail ? null : <button onClick={handleClick}>{buttonText}</button>}
    </React.Fragment>
  );
}


export default SurveyControl;