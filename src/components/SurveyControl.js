import React, {useContext, useState, useEffect } from "react";
import SurveyForm from "./SurveyForm";
import SurveyDetail from "./SurveyDetail";
import SurveyList from "./SurveyList";
import NewSurvey from "./NewSurvey";
import EditSurveyForm from "./EditSurveyForm";
import DashBoard from "./Dashboard";
import React, { useState } from 'react';
import { db, auth } from './../firebase.js';
import { collection, addDoc, updateDoc, deleteDoc } from "firebase/firestore";
import DashBoard from "./Dashboard";

function SurveyControl(){

  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
  const [mainSurveyList, setMainSurveyList] = useState([]);
  const [selectedSurvey, setSelectedSurvey] = useState(null);
  const [editSurvey, setEditSurvey] = useState(null);
  const [error, setError] = useState(null);
  const [dashboardDisplay, setDashboardDisplay] = useState(false);
  const [answersList, setAnswersList] = useState([]);
  const [questionsList, setQuestionsList] = useState([]);



  const handleClick = () => {
    if (selectedSurvey != null) {
      setSelectedSurvey(null);
      setEditSurvey(null);
    } else {
      setFormVisibleOnPage(true);
    }
  }

  const handleDeletingSurvey = (id) => {
    const newMainSurveyList = mainSurveyList.filter((survey) => survey.id !== id);
    setMainSurveyList(newMainSurveyList);
    setSelectedSurvey(null);
  }

  const handleEditClick = () => {
    setEditSurvey(true);
  }

  const handleEditingSurveyInList = (surveyToEdit) => {
    const editedMainSurveyList = mainSurveyList
      .filter((survey) => survey.id !== selectedSurvey.id)
      .concat(surveyToEdit);
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
  }

  let currentlyVisibleState = null;
  let buttonText = null;

  if (auth.currentUser == null) {
    return (
      <React.Fragment>
        <h1>You must be signed in to access the queue.</h1>
      </React.Fragment>
    )
  } else if (auth.currentUser != null) {

    let currentlyVisibleState = null;
    let buttonText = null; 

  if (error) {
      currentlyVisibleState = <p>There was an error: {error}</p>
  } else if (editSurvey) {
    currentlyVisibleState = <SurveyForm
      survey={selectedSurvey}
      onEditSurvey={handleEditingSurveyInList} />
    buttonText = "Return to Survey List";
  } else if (selectedSurvey != null) {
    currentlyVisibleState = <SurveyDetail
      survey={selectedSurvey}
      onClickingDelete={handleDeletingSurvey}
      onClickingEdit={handleEditClick} />
    buttonText = "Return to Survey List";
  } else if (formVisibleOnPage) {
    currentlyVisibleState = <SurveyForm
      onNewSurveyCreation={handleAddingNewSurveyToList} />
    buttonText = "Return to Survey List";
  } else {
    currentlyVisibleState = 
    <SurveyList
      onSurveySelection={handleChangingSelectedSurvey}
      surveyList={mainSurveyList} />;
    buttonText = "Add Survey";
  }

  return (
    <React.Fragment>
      {currentlyVisibleState}
      {error ? null : <button onClick={handleClick}>{buttonText}</button>}
    </React.Fragment>
  );
}

export default SurveyControl;