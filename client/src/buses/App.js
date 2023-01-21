
import React from 'react'
import {Routes,Route} from "react-router-dom"
import Cards from '../components/Cards/Cards';
import BusList from '../Bus/BusList';
import BusEdit from '../Bus/BusEdit';
import Bookings from '../Bus/Bookings';
import BusAdd from '../Bus/BusAdd';
import Header from "./Header";
import RouteList from '../busesRoutes/RouteList';
import RouteAdd from '../busesRoutes/RouteAdd';
import RouteEdit from '../busesRoutes/RouteEdit';
import Homepage from '../components/Homepage/Homepage';



// import AdminLogin from '../components/Auth/AdminLogin';
// import AdminSignUp from "../components/Auth/AdminSignUp"

function App() {
 
  return (
    <>
    <Header/>
    <Routes >
          {/* <Route exact path ='/signin' element ={<AdminSignUp/>}></Route>  */}

      <Route  exact path ='/' element ={<Homepage/>}></Route>
      <Route  path ='/home' element ={<Cards/>}></Route>
       <Route  path ='/bookings' element ={<Bookings/>}></Route> 
        <Route  path= "/bus" element ={<BusList />}></Route>   
        <Route  path= "/bus/edit" element ={<BusEdit />}></Route>   
        <Route  path= "/bus/new" element ={<BusAdd/>}></Route> 
        <Route   path= "/routes" element ={<RouteList/>}></Route>  
          <Route path='/Route/new' element={<RouteAdd />}></Route>
          <Route path='/route/edit' element={<RouteEdit />}></Route>
{/* 
      <Route exact path ='/login' element ={<AdminLogin/>}></Route>  */}

    </Routes>
   </>
  )
}

export default App