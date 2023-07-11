import React from 'react';
import PropTypes from 'prop-types';
import ResponseForm from './ResponseForm';

function ResponseDetail(props) {
  const { survey, onClickingDelete, onClickingSend, responseAnswers } = props;
  const [responses, setResponses] = useState({});

  function handleAnswerSubmission(event, index) {
    setResponses((previousAnswers) => ({
      ...previousAnswers,
      [index]: event.target.value,
    }));
  }

  function handleResponseFormSubmission(event) {
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
      <form onSubmit={handleResponseFormSubmission}>
        {questionInputs}
        <button type="submit">Submit</button>
      </form>  

      {survey.creatorEmail !== survey.currentUserEmail ? null : <button onClick={survey.onClickingEdit}>Update</button>}
      {survey.creatorEmail !== survey.currentUserEmail ? null : <button onClick={()=> onClickingDelete(survey.id) }>Delete</button>}  
    </React.Fragment>
    );
  }

  ResponseDetail.propTypes = {
    currentEmail: PropTypes.string,
    onClickingSend: PropTypes.func,
    currentQuestions: PropTypes.array,
};

export default ResponseDetail;











// const ResponseDetails = ({ response }) {
//   const { firstResponse, secondResponse, thirdResponse, responderEmail } = response;


//   return (
//     <div>
//       <h3>Response Details</h3>
//       <p>First Response: {firstResponse}</p>
//       <p>Second Response: {secondResponse}</p>
//       <p>Third Response: {thirdResponse}</p>
//       <p>Responder Email: {responderEmail}</p>
//     </div>
//   );
// }

// ResponseDetails.propTypes = {
//   response: PropTypes.shape({
//     firstResponse: PropTypes.string.isRequired,
//     secondResponse: PropTypes.string.isRequired,
//     thirdResponse: PropTypes.string.isRequired,
//     responderEmail: PropTypes.string.isRequired
//   }).isRequired
// };

// export default ResponseDetails;