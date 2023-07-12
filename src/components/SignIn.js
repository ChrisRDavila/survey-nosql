import React, { useState } from "react";
import { auth } from "./../firebase.js";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function SignIn(props){  

  const { onSignIn } = props;

  const [signInSuccess, setSignInSuccess] = useState(null);
  const [signOutSuccess, setSignOutSuccess] = useState(null);

  function doSignIn(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.signinPassword.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setSignInSuccess(`You've successfully signed in as ${userCredential.user.email}!`)
        onSignIn(userCredential.user.email);
      })
      .catch((error) => {
        setSignInSuccess(`There was an error signing in: ${error.message}!`)
      });
  }

  function doSignOut() {
    signOut(auth)
      .then(function() {
        setSignOutSuccess("You have successfully signed out!");
      }).catch(function(error) {
        setSignOutSuccess(`There was an error signing out: ${error.message}!`);
      });
  }

  return (
    <Container className="my-auto">
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <h1 className="mb-3">Sign In</h1>
          {signInSuccess && <Alert variant="success">{signInSuccess}</Alert>}
          <Form onSubmit={doSignIn} className="mb-5">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" name='email' />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" name='signinPassword' />
            </Form.Group>
            <Button variant="primary" type="submit">
              Sign in
            </Button>
          </Form>

          <h1 className="mb-3">Sign Out</h1>
          {signOutSuccess && <Alert variant="success">{signOutSuccess}</Alert>}
          <Button variant="danger" onClick={doSignOut}>Sign out</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default SignIn