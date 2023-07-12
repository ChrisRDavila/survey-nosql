import React from "react";
import PropTypes from "prop-types";
import ReusableResponseForm from "./ReusableResponseForm";
import SurveyForm from "./SurveyForm";

function ResponseForm(props){

  function handleResponseFormSubmission(event){
    event.preventDefault();
    props.onNewResponseCreation({
      response1: event.target.response1.value, 
      response2: event.target.response2.value,
      response3: event.target.response3.value,
  });
}

return (
  <React.Fragment>
    <ReusableResponseForm
    form onSubmit={handleResponseFormSubmission}
    buttonText="Submit"/>
  </React.Fragment>
  );
}

SurveyForm.propTypes = {
  onNewResponseCreation: PropTypes.func
};

export default ResponseForm;














