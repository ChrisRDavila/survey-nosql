import React from "react";
import PropTypes from "prop-types";

function ReusableResponseForm(props){
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='firstRespnse'
          placeholder='Yes' />
        <input
          type='text'
          name='secondResponse'
          placeholder='Yeah' />
        <input
          type='text'
          name='thirdResponse'
          placeholder='Yup' />
      </form>   
    </React.Fragment>
  );
}
ReusableResponseForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableResponseForm;