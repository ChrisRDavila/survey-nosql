import React from "react";
import PropTypes from "prop-types";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function ReusableResponseForm(props){
  return (
    <React.Fragment>
  <Form onSubmit={props.formSubmissionHandler}>
    <Form.Group controlId="response1" className="mb-3">
      <Form.Control
        type="text"
        name="response1"
        placeholder="Yes"
      />
    </Form.Group>
    <Form.Group controlId="response2" className="mb-3">
      <Form.Control
        type="text"
        name="response2"
        placeholder="Yeah"
      />
    </Form.Group>
    <Form.Group controlId="response3" className="mb-3">
      <Form.Control
        type="text"
        name="response3"
        placeholder="Yup"
      />
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
</React.Fragment>
  );
}
ReusableResponseForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableResponseForm;














// import React from "react";
// import PropTypes from "prop-types";
// import ResponseForm from "./ResponseForm";

// function AddSurveyVariable(props) {
//   const [questionArray, setQuestionArray] = useState([]);

//   function responsePlaceHolder(event) {
//     event.preventDefault();
//     const newQuestion = event.target.question.value;
//     setQuestionArray((previousArray) => [...previousArray, newQuestion]); 
// }

// function handleNewResponseFormSubmission(event) {
//   event.preventDefault();
//   props.onNewSurveyCreation({
//     title: event.target.title.value,
//     question: questionArray,
//   });
// }

// const questions = questionArray.map((question, index) => (
//   <div key={index}>{question}</div>  
// ));

// return (
//   <React.Fragment>
//     {questions}
//     <form onSubmit={handleNewResponseFormSubmission}>
//       Title: <input
//         type='text'
//         name='title'
//         placeholder='Title' />
//         <button type='submit'>Create Survey</button>
//       </form>
//       <ResponseForm
//         formSubmissionHandler={responsePlaceHolder}
//         buttonText="Add question"/>
//   </React.Fragment>        
//   );
// }

// AddSurveyVariable.propTypes = {
//   onNewSurveyCreation: PropTypes.func
// };

// export default AddSurveyVariable;







