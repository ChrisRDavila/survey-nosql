import { Link } from "react-router-dom";
import SignOutButton from "./SignOutButton";
import React, { useEffect } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";


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
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand as={Link} to="/">Survey</Navbar.Brand>
      <Container>
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/survey-list">Survey List</Nav.Link>
          {!isSignedIn ? (
            <>
              <Nav.Link as={Link} to="/sign-in">Sign In</Nav.Link>
              <Nav.Link as={Link} to="/sign-up">Sign Up</Nav.Link>
            </>
          ) : (
            <SignOutButton />
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;