import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css'
import Sidebar from './components/SideBar/SideBar';
import MainDash from './MainDash/MainDash';
import AdminSignUp from './components/AdminSignUp';
import NavBar from "./components/NavBar";
import AdminLogin from "./components/AdminLogIn";
import Home from "./components/Home";

function App() {
  const [userAdmin, setUserAdmin] = useState(null)

  useEffect(() => {
    fetch("/admin-me").then((r) => {
      if (r.ok){
        r.json().then((userAdmin) => setUserAdmin(userAdmin))
      }
    })
  }, []);


  return (
    <>
      <Router>
        <>
          <NavBar userAdmin={userAdmin} setUserAdmin={setUserAdmin} />
          <main>
            {/* {userAdmin ? ( */}
          
              <Home/>
              <Routes>
                {/* set your path to lower case and should be alike with the link address */}

                
              {/* </Routes> */}
            {/* ) : ( */}
              {/* <Routes> */}
                {/* set your path to lower case and should be alike with the link address */}
                <Route exact path="/Admin-signup" element = {<AdminSignUp setUserAdmin={setUserAdmin}/>} />
                <Route exact path="/admin-login" element = { <AdminLogin setUserAdmin={setUserAdmin}/>}/>
                
                {/* <AdminLogin setUserAdmin={setUserAdmin}/> */}
              
              
              </Routes>
              
                  
            {/* )} */}
            
          </main>
        </>
      </Router>
    </>
  );
}

export default App;