// import React from "react";
// import PropTypes from "prop-types";

// function VariableForm(props) {
//   return (
//     < React.Fragment >
//       <form onSubmit={props.formSubmissionHandler}>
//       <div>
//         Add Question: <input type='text'
//           name="question"
//             placeholder="Type your question here" />
//           <button type="submit">Submit</button>
//         </div>
//       </form>
//     </React.Fragment >
//   );
// }

// VariableForm.propTypes = {
//   formSubmissionHandler: PropTypes.func,
//   buttonText: PropTypes.string
// };

// export default VariableForm;


import React from "react";
import PropTypes from "prop-types";

function VariableForm(props) {
  return (
    < React.Fragment >
      <form onSubmit={props.formSubmissionHandler}>
        Survey Title: <input
          type='text'
          name="title"
          placeholder="Title of Survey" /> <br />
        {/* <button onClick={props.addQuestion}>submit</button> */}
        <br /><br />
        <br /><br />
        <button type='submit'>Submit</button>
        {/* <button type='submit'>Create</button> */}
      </form>
    </React.Fragment >
  );
}

VariableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default VariableForm;