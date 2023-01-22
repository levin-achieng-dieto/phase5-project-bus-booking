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
import AdminSignUp from "./components/Auth/AdminSignUp";
import { useLoggedInContext } from './components/Auth/Context/LoginContext';

function App() {

  const [adminUser, setAdminUser] = useState(null)
  const [clientUser, setClientUser] =useState(null)
  const {loggedIn, setLoggedIn} = useLoggedInContext()

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
        r.json.then((user) => setLoggedIn(user))
      }
    })
  }, [])
  console.log(loggedIn)
  // console.log(userType)
  return (
    <>
      
  {
    localStorage.getItem('userType') === 'admin'?
    <>
        <Header/>
        <BusApp />
    </> :
    localStorage.getItem('userType') === 'client'?
    <>
        <Home/>
        <HomeApp />

    </> :
    <Routes>
   <Route path="/clientsignup" element={<ClientSignUp setClientUser={setLoggedIn}/>} />
   <Route path="/adminsignup" element={<AdminSignUp setAdminUser={setLoggedIn}/>} />
   <Route path="/clientlogin" element={<ClientLogin clientUser={setLoggedIn}/>} />
   <Route path="/adminlogin" element={<AdminLogin adminUser={setLoggedIn}/>} />
   

    </Routes>
  }
    </>
  );

}

export default App;
