import React from "react";
import PropTypes from "prop-types";
// import ReusableResponseForm from "./ReusableResponseForm";
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
      <Form onSubmit={handleResponseFormSubmission}>
        <h3>{survey.title}</h3>
        <h3>{survey.question1}</h3>
        <Form.Group controlId="response1" className="mb-3">
          <Form.Label>Answer</Form.Label>
          <Form.Control
            type="text"
            name="response1"
            placeholder="Answer"
          />
        </Form.Group>
        <Form.Group controlId="response2" className="mb-3">
          <Form.Label>Answer</Form.Label>
          <Form.Control
            type="text"
            name="response2"
            placeholder="Answer"
          />
        </Form.Group>
        <Form.Group controlId="response3" className="mb-3">
          <Form.Label>Answer</Form.Label>
          <Form.Control
            type="text"
            name="response3"
            placeholder="Answer"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Send
        </Button>
      </Form>
      <hr/>
      <Button variant="outline-primary" onClick={ onClickingEdit } className="me-2">Update Survey</Button>
      <Button variant="outline-danger" onClick={()=> onClickingDelete(survey.id) }>Delete Survey</Button>
      <hr/>
    </React.Fragment>  
  );
}

SurveyForm.propTypes = {
  onNewResponseCreation: PropTypes.func
};

export default ResponseForm;














