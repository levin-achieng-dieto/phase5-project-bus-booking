import React from 'react'
import "./MainDash.css"
// import BusTable from '../components/Table/BusTable';
import {Routes,Route} from "react-router-dom"
import Cards from '../components/Cards/Cards';
import BusRoutes from '../components/Routes/BusRoutes';
import AddRoutes from '../components/Routes/AddRoutes';
// import Bus from '../components/Bus/Bus';
import Buses from '../components/Bus/Buses';
import Customers from '../components/Customers/Customers';
import User from '../components/Customers/User';
import SeatSelection from '../components/Seats/SeatSelection';
import BusBooking from '../components/Bookings/BusBooking';
import AddBus from '../components/Bus/AddBus';
import AddUser from '../components/Customers/AddUser';
import Booking from '../components/Booking1/Booking';
import Payment from '../components/Payment/Payment';
import Ticket from '../components/Payment/Ticket';
import AdminLogin from '../components/Auth/AdminLogin';
import AdminSignUp from "../components/Auth/AdminSignUp"


function MainDash() {
  return (
       <div className="MainDash"> 
       <Routes>
      <Route exact path ='/' element ={<Cards/>}></Route> 
      <Route exact path ='/signin' element ={<AdminSignUp/>}></Route> 
      <Route exact path ='/login' element ={<AdminLogin/>}></Route> 
      {/* <Route path='/seats' element={<><SeatSelection /> <Footer /></>} />
      <Route path='/bookings' element={<><BusBooking/> <Footer /></>} />  */}
      {/* <Route exact path= "/buses" element ={<Bus/>}></Route>  */}
      <Route exact path= "/buses" element ={<Buses/>}></Route> 
       <Route  exact path= "/add-routes" element ={<AddRoutes/>}></Route> 
       <Route  exact path= "/routes" element ={<BusRoutes/>}></Route> 
       <Route exact path= "/customers" element ={<Customers/>}></Route> 
       {/* <Route path= "/customers" element ={<User/>}></Route>  */}
      <Route  path= "/bookings" element ={<BusBooking/>}></Route>
      <Route  path= "/add-bus" element ={<AddBus/>}></Route>
      <Route  path= "/add-customer" element ={<AddUser/>}></Route>
      <Route  path= "/seats-details" element ={<SeatSelection/>}></Route> 
      <Route  path= "/seats" element ={<Booking/>}></Route>
      <Route  path= "/payments" element ={<Payment/>}></Route>
      <Route  path= "/ticket" element ={<Ticket/>}></Route>
      <Route  path= "/login" element ={<AdminLogin/>}></Route>
    
      </Routes>
</div> 

  )
}

export default MainDash