import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const auth = get Auth();

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('User Registered', user);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('Error registering user'errorCode, errorMessage);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Sign Up</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        />
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default SignUp;