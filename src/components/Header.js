import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <React.Fragment>
      <h1>Survey</h1>
      <Link to="/">Home</Link> | <Link to="/newsurvey">Create Survey</Link>
      <Link to="/signin">Sign In</Link> | <Link to="/signup">Sign Up</Link>
    </React.Fragment>
  );
}

export default Header;