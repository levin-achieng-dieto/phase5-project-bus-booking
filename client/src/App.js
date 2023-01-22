import React from "react";

import { Routes, Route } from "react-router-dom";
import HomeApp from './Clients/HomeApp';
import "./Clients/index.css"
import BusApp from "./buses/BusApp";
import "./buses/index.css"
import Header from "./buses/Header";
import Home from "./Clients/Home";


function App() {
  return (
      <>
      {localStorage.getItem("userAdmin")? <Header /> : <Home />}
      <HomeApp/>
       <BusApp/>
    </>
  );
}

export default App;
