import React, { useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header";
import SurveyControl from "./SurveyControl";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import SurveyList from "./SurveyList";
import SurveyDetail from "./SurveyDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App(){

  const [userEmail, setUserEmail] = useState(null);
  const handleUserEmail = (email) => {
    setUserEmail(email);
    console.log(email)
    };
  return ( 
    <Router>
      <Header />
      <Routes>
        <Route path="/sign-in" element={<SignIn onSignIn={handleUserEmail} />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/survey-list" element={<SurveyControl userEmail={userEmail}/>} />
        <Route path="/survey-list/:id" element={<SurveyDetail />} />
      </Routes>
    </Router>
  );
}

export default App;