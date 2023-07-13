import React from "react";
import PropTypes from "prop-types";

function Survey({props, title, whenSurveyClicked}) {
  const { question, id } = title;
  return (
    <React.Fragment>
      <div onClick = {() => props.whenSurveyClicked(props.id)}>
        <h3>{title}</h3>
        <h3>{id}</h3>
        <h3>{question}</h3>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Survey.propTypes = {
  title: PropTypes.string,
  // question: PropTypes.object,
  whenSurveyClicked: PropTypes.func,
  id: PropTypes.string
};

export default Survey;