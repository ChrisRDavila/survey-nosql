import React from "react";
import Survey from "./Survey";
import PropTypes from "prop-types";

function SurveyList(props){

  return (
    <React.Fragment>
      <button onClick={props.onDashboardClick}>Dashboard</button>
      <hr/>
      {props.surveyList.map((survey) =>
        <Survey
          whenSurveyClicked = { props.onSurveySelection }
          title={survey.title}
          question1={survey.question1}
          question2={survey.question2}
          question3={survey.question3}
          id={survey.id}
          key={survey.id}/>
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