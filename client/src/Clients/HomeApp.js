import React from 'react'
import {Routes,Route} from "react-router-dom"
import Cards from '../components/Cards/Cards';
import BusList from './BusesList';
import Home from "./Home";
import Homepage from './Homepage';

function HomeApp() {
  return (
    <>
    <Home/>
    <Routes >
    <Route  exact path ='/' element ={<Homepage/>}></Route>
     <Route  path ='/customer-page' element ={<Cards/>}></Route>
     <Route  path ='/buses' element ={<BusList/>}></Route>
   
   

     </Routes>
     </>
  )
}

export default HomeApp
