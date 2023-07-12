import React from "react";
import Survey from "./Survey";
import PropTypes from "prop-types";

function Dashboard(props) {
  const filteredSurveys = props.surveyList.filter(survey => survey.creatorEmail === props.userEmail);

  return (
    <React.Fragment>
      {filteredSurveys.map((survey) =>
        <Survey
          whenSurveyClicked={props.onSurveySelection}
          title={survey.title}
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
