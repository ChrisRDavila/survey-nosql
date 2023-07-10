import React from "react";
import SurveyForm from "./SurveyForm";
import PropTypes from "prop-types";

function EditSurveyForm(props){
  const { survey } = props;

  function handleEditSurveyFormSubmission(event) {
    event.preventDefault();
    props.onEditSurvey({
      title: event.target.title.value, 
      firstQuestion: event.target.firstQuestion.value, 
      secondQuestion: event.target.secondQuestion.value, 
      thirdQuestion: event.target.thirdQuestion.value, 
      id: survey.id
  });
}

  return (
    <React.Fragment>
      <SurveyForm
        formSubmissionHandler={handleEditSurveyFormSubmission}
        buttonText="Update Survey" />
    </React.Fragment>
  );
}

EditSurveyForm.propTypes = {
  survey: PropTypes.object,
  onEditSurvey: PropTypes.func
};  

export default EditSurvey;
