import React from "react";
import PropTypes from "prop-types";
// import ReusableSurveyForm from "./ReusableSurveyForm";

function SurveyForm(props){

//   function handleSurveyFormSubmission(event){
//     event.preventDefault();
//     props.onNewSurveyCreation({
//       firstQuestion: event.target.firstQuestion.value, 
//       secondQuestion: event.target.secondQuestion.value,
//       thirdQuestion: event.target.thirdQuestion.value,
//   });
// }

return (
  <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        Title: <input
          type='text'
          name='title'
          placeholder='Title' />
        Question1:<input
          type='text'
          name='firstQuestion'
          placeholder='Do you like this quiz?' />
        Question2<input
          type='text'
          name='secondQuestion'
          placeholder='Are you sure?' />
        Question3<input
          type='text'
          name='thirdQuestion'
          placeholder='Are you really sure?' />
      <br/>
      <button type='submit'>{props.buttonText}</button>
      </form>   
    </React.Fragment>
  );
}

SurveyForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default SurveyForm;