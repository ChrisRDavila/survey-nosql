import React from "react";
import PropTypes from "prop-types";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import ReusableSurveyForm from "./ReusableSurveyForm";

function SurveyForm(props){

  // function handleSurveyFormSubmission(event){
  //   event.preventDefault();
  //   props.onNewSurveyCreation({
  //     question1: event.target.question1.value, 
  //     question2: event.target.question2.value,
  //     question3: event.target.question3.value,
  //   });
  // }

  return (
    <Form onSubmit={props.formSubmissionHandler}>
      <Form.Group controlId="title" className="mb-3">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          placeholder="Title"
        />
      </Form.Group>

      <Form.Group controlId="question1" className="mb-3">
        <Form.Label>Question 1</Form.Label>
        <Form.Control
          type="text"
          name="question1"
          placeholder="Do you like this quiz?"
        />
      </Form.Group>

      <Form.Group controlId="question2" className="mb-3">
        <Form.Label>Question 2</Form.Label>
        <Form.Control
          type="text"
          name="question2"
          placeholder="Are you sure?"
        />
      </Form.Group>

      <Form.Group controlId="question3" className="mb-3">
        <Form.Label>Question 3</Form.Label>
        <Form.Control
          type="text"
          name="question3"
          placeholder="Are you really sure?"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        {props.buttonText}
      </Button>
    </Form>
    );
}

SurveyForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default SurveyForm;