import React from 'react';
import PropTypes from 'prop-types';
import VariableForm from './VariableForm';

function VariableDetails(props) {
  const { survey, onClickingDelete, onClickingSend, responseAnswers } = props;
  const [responses, setResponses] = useState({});

  function handleAnswerSubmission(event, index) {
    setResponses((previousAnswers) => ({
      ...previousAnswers,
      [index]: event.target.value,
    }));
  }

  function handleVariableFormSubmission(event) {
    event.preventDefault();
      const { onClickingSend } = props;
      const surveyData = {
        questions: props.currentQuestions.map((question, index) => ({
          question: question,
          response: responses[index] || "",
        })),
      };
      onClickingSend(surveyData);
  }    

  const questionInputs = props.currentQuestions.map((question, index) => (
    <div key={index}>
      <label> 
      {question}
      <input
        type="text"
        value={responses[index] || ""}
        onChange={(event) => handleAnswerSubmission(event, index)}/>
      </label>
    </div>
  ));
  
  return (
    <React.Fragment>
      <h1>{survey.title}</h1>
      <form onSubmit={handleVariableFormSubmission}>
        {questionInputs}
        <button type="submit">Submit</button>
      </form>  

      {survey.creatorEmail !== survey.currentUserEmail ? null : <button onClick={survey.onClickingEdit}>Update</button>}
      {survey.creatorEmail !== survey.currentUserEmail ? null : <button onClick={()=> onClickingDelete(survey.id) }>Delete</button>}  
    </React.Fragment>
    );
  }

  VariableDetails.propTypes = {
    currentEmail: PropTypes.string,
    onClickingSend: PropTypes.func,
    currentQuestions: PropTypes.arrayOf(PropTypes.string)
};

export default VariableDetails;
