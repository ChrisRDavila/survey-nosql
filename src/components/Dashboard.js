import React from "react";
import Survey from "./Survey";
import PropTypes from "prop-types";

function Dashboard(props) {
  const filteredSurveys = props.surveyList.filter(survey => survey.id === props.id);

  return (
    <React.Fragment>
      {filteredSurveys.map((survey) =>
        <Survey
          whenSurveyClicked={props.onSurveySelection}
          title={survey.title}
          question1={survey.question1}
          question2={survey.question2}
          question3={survey.question3}
          response1={survey.response1}
          response2={survey.response2}
          response3={survey.response3}
          id={survey.id}
          key={survey.id} />
      )}    
    </React.Fragment>
  );
}

Dashboard.propTypes = {
  surveyList: PropTypes.array,
  onSurveySelection: PropTypes.func,
  userEmail: PropTypes.string
};

export default Dashboard;
