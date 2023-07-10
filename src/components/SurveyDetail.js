import React from "react";
import PropTypes from "prop-types";

function SurveyDetail(props){
  const { survey, onClickingDelete, onClickingEdit, onClickingSend, response } = props;

  function handleResponseFormSubmission(event){
    event.preventDefault();
    onClickingSend({
      firstResponse: event.target.firstResponse.value, 
      secondResponse: event.target.secondResponse.value,
      thirdResponse: event.target.thirdResponse.value,
      surveyId: survey.id
    });
  }

  return (
    <React.Fragment>
      <form onSubmit={handleResponseFormSubmission}>
        <h1>Survey made by: {survey.creatorEmail}</h1>
        <h3>{survey.title}</h3>
        <h3>{survey.Question1}</h3>
        Answer: <input
          type='text'
          name='firstResponse'
          placeholder='Answer'/>
        Answer: <input
          type='text'
          name='secondResponse'
          placeholder='Answer'/>
        Answer: <input
          type='text'
          name='thirdResponse'
          placeholder='Answer'/>
        <button type='submit'>Send</button>
      </form>
      {response &&
        <div>
          <h3>Response 1: {response.firstResponse}</h3>
          <h3>Response 2: {response.secondResponse}</h3>
          <h3>Response 3: {response.thirdResponse}</h3>
        </div>
      }
      <hr/>
      <button onClick={ onClickingEdit }>Update Survey</button>
      <button onClick={()=> onClickingDelete(survey.id) }>Delete Survey</button>
      <hr/>
    </React.Fragment>
  );
}  

SurveyDetail.propTypes = {
  survey: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingSend: PropTypes.func,
  response: PropTypes.object
};

export default SurveyDetail;

