import React from "react";
import Survey from "./Survey";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function SurveyList(props){

  return (
    <React.Fragment>
      <button onClick={props.onDashboardClick}>Dashboard</button>
      <hr/>
      {props.surveyList.map((survey) =>
        <Link to={`/survey-list/${survey.id}`} key={survey.id}>
          <Survey
          whenSurveyClicked = { props.onSurveySelection }
          title={survey.title}
          id={survey.id}
          />
        </Link>
      )}
    </React.Fragment>
  );
}

SurveyList.propTypes = {
  SurveyList: PropTypes.array,
  onSurveySelection: PropTypes.func,
  onDashboardClick: PropTypes.func
};

export default SurveyList;