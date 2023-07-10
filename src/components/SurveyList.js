import React from "react";
import Survey from "./Survey";
import PropTypes from "prop-types";

function SurveyList(props){

  return (
    <React.Fragment>
      <hr/>
      {props.surveyList.map((survey) =>
        <Survey
          whenSurveyClicked = { props.onSurveySelection }
          name={survey.name}
          id={survey.id}
          key={survey.id}/>
      )}
    </React.Fragment>
  );
}

SurveyList.propTypes = {
  surveyList: PropTypes.array,
  onSurveySelection: PropTypes.func
};

export default SurveyList;