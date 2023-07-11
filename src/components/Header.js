import { Link } from "react-router-dom";
import SignOutButton from "./SignOutButton";
import React, { useEffect } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";

function Header() {
  const [isSignedIn, setIsSignedIn] = React.useState(false);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsSignedIn(!!user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <React.Fragment>
      <h1>Survey</h1>
      <Link to="/">Home</Link> | <Link to="/new-survey">Create Survey</Link> |
      {!isSignedIn ? (
        <React.Fragment>
          <Link to="/sign-in">Sign In</Link> | <Link to="/sign-up">Sign Up</Link>
        </React.Fragment>
      ) : (
        <SignOutButton />
      )}
    </React.Fragment>
  );
}

export default Header;