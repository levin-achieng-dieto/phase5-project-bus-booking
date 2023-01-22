
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

function BusApp() {
 
  return (
    <>
    
    <Routes >
          {/* <Route exact path ='/signin' element ={<AdminSignUp/>}></Route>  */}

      <Route  exact path ='/admin/home' element ={<Cards/>}></Route>
       <Route exact  path ='/admin/bookings' element ={<Bookings/>}></Route> 
        <Route exact  path= "/admin/bus" element ={<BusList />}></Route>   
        <Route exact  path= "/admin/bus/edit" element ={<BusEdit />}></Route>   
        <Route  exact path= "/admin/bus/new" element ={<BusAdd/>}></Route> 
        <Route  exact  path= "/admin/routes" element ={<RouteList/>}></Route>  
          <Route exact  path='/admin/Route/new' element={<RouteAdd />}></Route>
          <Route exact  path='/admin/route/edit' element={<RouteEdit />}></Route>
{/* 
      <Route exact path ='/login' element ={<AdminLogin/>}></Route>  */}
      <Route path ='/' element ={<Homepage/>}></Route>

    </Routes>
   </>
  )
}

export default BusApp