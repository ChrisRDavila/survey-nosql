import React from "react";
import PropTypes from "prop-types";
import ReusableQuizForm from "./ReusableSurveyForm";

function SurveyForm(props){

  function handleSurveyFormSubmission(event){
    event.preventDefault();
    props.onNewSurveyCreation({
      firstQuestion: event.target.firstQuestion.value, 
      secondQuestion: event.target.secondQuestion.value,
      thirdQuestion: event.target.thirdQuestion.value,
  });
}

return (
  <React.Fragment>
    <ReusableSurveyForm
    form onSubmit={handleSurveyFormSubmission}
    buttonText="Submit"/>
  </React.Fragment>
  );
}

SurveyOneForm.propTypes = {
  onNewSurveyCreation: PropTypes.func
};

export default SurveyForm;