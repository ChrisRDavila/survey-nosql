import React from "react";
import PropTypes from "prop-types";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function SurveyDetail(props){
  const { survey, onClickingDelete, onClickingEdit, onClickingSend, responseAnswers } = props;

  function handleVariableFormSubmission(event){
    event.preventDefault();
    onClickingSend({
      response1: event.target.response1.value, 
      response2: event.target.response2.value,
      response3: event.target.response3.value,
      surveyId: survey.id
    });
  }

  return (
    <React.Fragment>
      <Form onSubmit={handleVariableFormSubmission}>
        <h1>Survey made by: {survey.creatorEmail}</h1>
        <h3>{survey.title}</h3>
        <h3>{survey.Question1}</h3>
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

      {survey.creatorEmail !== props.currentUserEmail ? null : <button onClick={props.onClickingEdit}>Update Survey</button>}
      {survey.creatorEmail !== props.currentUserEmail ? null : <button onClick={() => onClickingDelete(survey.id)}>Delete Survey</button>}
      
      {survey.creatorEmail !== props.currentUserEmail ? null :
        responseAnswers.map((response) =>
        <Card className="mb-4">
          <Card.Body>
            <Card.Title>Responses</Card.Title>
            <Card.Text>Response 1: {response.response1}</Card.Text>
            <Card.Text>Response 2: {response.response2}</Card.Text>
            <Card.Text>Response 3: {response.response3}</Card.Text>
          </Card.Body>
        </Card>
        )
      }
      <hr/>
      <Button variant="outline-primary" onClick={ onClickingEdit } className="me-2">Update Survey</Button>
      <Button variant="outline-danger" onClick={()=> onClickingDelete(survey.id) }>Delete Survey</Button>
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

