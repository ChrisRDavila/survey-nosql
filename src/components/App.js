import React from "react";
import Header from "./Header";
import SurveyControl from "./SurveyControl";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App(){
  return ( 
    <Router>
      <Header />
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/new-survey" element={<SurveyControl />} />
      </Routes>
    </Router>
  );
}

export default App;