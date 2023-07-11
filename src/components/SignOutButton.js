import React from 'react';
import { getAuth, signOut } from "firebase/auth";

const SignOutButton = () => {
    const auth = getAuth();

    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            console.log("Sign-out successful.");
        }).catch((error) => {
            // An error happened.
            console.error("An error happened.", error);
        });
    };

    return (
        <button onClick={handleSignOut}>Sign Out</button>
    );
}

export default SignOutButton;