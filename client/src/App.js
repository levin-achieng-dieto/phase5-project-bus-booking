import React,{useState, useEffect} from "react";


import { Routes, Route } from "react-router-dom";
import HomeApp from './Clients/HomeApp';
import "./Clients/index.css"
import BusApp from "./buses/BusApp";
import "./buses/index.css"
import Header from "./buses/Header";
import Home from "./Clients/Home";
import AdminLogin from "./components/Auth/AdminLogin";
import ClientLogin from "./components/Auth/ClientLogin";
import ClientSignUp from "./components/Auth/ClientSignUp";


function App() {
  const [adminUser, setAdminUser] = useState("")
  const [clientUser, setClientUser] =useState("")
  

  useEffect(() => {
    fetch("/admin-me").then((r) => {
      if (r.ok){
        r.json.then((user) => setAdminUser(user))
      }
    })
  }, [])

  useEffect(() => {
    fetch("/client-me").then((r) => {
      if (r.ok){
        r.json.then((user) => setClientUser(user))
      }
    })
  }, [])
  return (
      <>
  {
    localStorage.getItem('userType') == 'admin'?
    <>
        <Header />
        <BusApp />
    </> :
    localStorage.getItem('userType') == 'client'?
    <>
        <Home />
        <HomeApp />
    </> :
    <ClientLogin />
}

    </>
  );
}

export default App;
