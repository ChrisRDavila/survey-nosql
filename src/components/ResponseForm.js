import React from "react";
import PropTypes from "prop-types";
import ReusableResponseForm from "./ReusableResponseForm";

function ResponseForm(props){

  function handleResponseFormSubmission(event){
    event.preventDefault();
    props.onNewResponseCreation({
      firstRespose: event.target.firstResponse.value, 
      secondResponse: event.target.secondResponse.value,
      thirdResponse: event.target.thirdResponse.value,
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

QuizOneForm.propTypes = {
  onNewResponseCreation: PropTypes.func
};

export default ResponseForm;