import React from 'react'
import {Routes,Route, Link} from "react-router-dom"
import Cards from '../components/Cards/Cards';
import BusList from './BusesList';
import Home from "./Home";
import Homepage from './Homepage';

import AdminSignUp from './Auth/AdminSignUp';
import AdminLogin from './Auth/AdminLogin';


function HomeApp() {
  return (
    <>
      <Home/>
        <Routes >
          <Route  exact path ='/' element ={<Homepage/>}></Route>
          <Route  path ='/customer-page' element ={<Cards/>}></Route>
          <Route  path ='/buses' element ={<BusList/>}></Route>
          <Route path="/adminsignup" element={<AdminSignUp />}></Route>
          <Route path="/adminlogin" element={<AdminLogin />}></Route>
        </Routes>
     </>
  )
}

export default HomeApp
