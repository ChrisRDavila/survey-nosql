import React from "react";
import PropTypes from "prop-types";
import SurveyForm from "./SurveyForm";

function NewSurvey(props) {


  function handleNewSurveyFormSubmission(event) {
    event.preventDefault();
    props.onNewSurveyCreation({
      creatorEmail: props.currentUserEmail,
      title: event.target.title.value,
      question1: event.target.question1.value,
      question2: event.target.question2.value,
      question3: event.target.question3.value,
    });
  }

  return (
    < React.Fragment >
      <SurveyForm
        formSubmissionHandler={handleNewSurveyFormSubmission}
        buttonText="Submit"
      />
    </React.Fragment >
  );
}

NewSurvey.propTypes = {
  onNewSurveyCreation: PropTypes.func
};

export default NewSurvey;