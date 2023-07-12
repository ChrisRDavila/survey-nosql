import React from "react";
import PropTypes from "prop-types";
import SurveyForm from "./SurveyForm";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';


function NewSurvey(props) {


  function handleNewSurveyFormSubmission(event) {
    event.preventDefault();
    props.onNewSurveyCreation({
      creatorEmail: props.currentUserEmail,
      title: event.target.title.value,
      question1: event.target.question1.value,
      question2: event.target.question2.value,
      question3: event.target.question3.value,
    });
  }

  return (
    <Container className="d-flex justify-content-center align-items-center">
      <Card className="mt-5" style={{ width: '80%' }}>
        <Card.Body>
          <Card.Title>New Survey</Card.Title>
          <Card.Subtitle className="mb-4 text-muted">Fill in the details below</Card.Subtitle>
          <Card.Text className="mb-3">
            <SurveyForm
              formSubmissionHandler={handleNewSurveyFormSubmission}
              buttonText="Submit"
            />
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

NewSurvey.propTypes = {
  onNewSurveyCreation: PropTypes.func
};

export default NewSurvey;