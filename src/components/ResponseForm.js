import React from "react";
import PropTypes from "prop-types";

function ResponseForm(props) {
  return (
    < React.Fragment >
      <form onSubmit={props.formSubmissionHandler}>
      <div>
        Question: <input type='text'
          name="question"
            placeholder="Type your question here" />
          <button type="submit">{ props.buttonText }</button>
        </div>
      </form>
    </React.Fragment >
  );
}

ResponseForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ResponseForm;









// import React from "react";
// import PropTypes from "prop-types";
// import ReusableResponseForm from "./ReusableResponseForm";
// import SurveyForm from "./SurveyForm";

// function ResponseForm(props){

//   function handleResponseFormSubmission(event){
//     event.preventDefault();
//     props.onNewResponseCreation({
//       firstRespose: event.target.firstResponse.value, 
//       secondResponse: event.target.secondResponse.value,
//       thirdResponse: event.target.thirdResponse.value,
//   });
// }

// return (
//   <React.Fragment>
//     <ReusableResponseForm
//     form onSubmit={handleResponseFormSubmission}
//     buttonText="Submit"/>
//   </React.Fragment>
//   );
// }

// SurveyForm.propTypes = {
//   onNewResponseCreation: PropTypes.func
// };

// export default ResponseForm;