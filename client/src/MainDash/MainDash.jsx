import React from 'react'
import Cards from '../components/Cards/Cards';
import "./MainDash.css";
import BusTable from '../components/Table/BusTable';
import {Routes,Route} from "react-router-dom"
import BusRoutes from '../components/Routes/BusRoutes';
import Customers from '../components/Customers/Customers';
import SeatSelection from '../components/Seats/SeatSelection';
import BusBooking from '../components/Bookings/BusBooking';



function MainDash() {
  return (
    <div className="MainDash">
      <Routes>
        <Route exact path ='/' element ={<Cards/>}></Route>
        <Route  exact path= "/buses" element ={<BusTable/>}></Route>
        <Route exact path= "/routes" element ={<BusRoutes/>}></Route>
        <Route exact path= "/customers" element ={<Customers/>}></Route>
        <Route exact path= "/seats" element ={<SeatSelection/>}></Route>
        <Route exact path= "/bookings" element ={<BusBooking/>}></Route>
      </Routes>
  </div>

  )
}

export default MainDash