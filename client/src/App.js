import React from "react";

import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import Homepage from "./components/Homepage/Homepage";
import AdminLogin from './components/Auth/AdminLogin';
import AdminSignUp from "./components/Auth/AdminSignUp"

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={ <Homepage />}/>
      <Route exact path ='/signin' element ={<AdminSignUp/>}></Route> 
      <Route exact path ='/login' element ={<AdminLogin/>}></Route> 
      </Routes>
    </Router>
  );
}

export default App;
