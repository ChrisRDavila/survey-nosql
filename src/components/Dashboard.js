import React from "react";
import Survey from "./Survey";
import PropTypes from "prop-types";

function DashBoard(props) {
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

DashBoard.propTypes = {
  surveyList: PropTypes.array,
  onSurveySelection: PropTypes.func,
  userEmail: PropTypes.string
};

export default DashBoard;
