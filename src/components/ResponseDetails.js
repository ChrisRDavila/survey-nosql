import React from 'react';
import PropTypes from 'prop-types';;

const ResponseDetails = ({ response }) => {
  const { response1, response2, response3, responderEmail } = response;


  return (
    <div>
      <h3>Response Details</h3>
      <p>First Response: {response1}</p>
      <p>Second Response: {response2}</p>
      <p>Third Response: {response3}</p>
      <p>Responder Email: {responderEmail}</p>
    </div>
  );
}

ResponseDetails.propTypes = {
  response: PropTypes.shape({
    response1: PropTypes.string.isRequired,
    response2: PropTypes.string.isRequired,
    response3: PropTypes.string.isRequired,
    responderEmail: PropTypes.string.isRequired
  }).isRequired
};

export default ResponseDetails;




