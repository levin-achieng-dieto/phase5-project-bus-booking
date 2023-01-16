import React from 'react'
import Cards from '../components/Cards/Cards';
import "./MainDash.css";
// import BusTable from '../components/Table/BusTable';
import {Routes,Route} from "react-router-dom"
import BusRoutes from '../components/Routes/BusRoutes';
import Card from '../components/Bus/Card';
// import Bus from '../components/Bus/Bus';
import Buses from '../components/Bus/Buses';


// import Customers from '../components/Customers/Customers';
import User from '../components/Customers/User';
import SeatSelection from '../components/Seats/SeatSelection';
import BusBooking from '../components/Bookings/BusBooking';
import AddBus from '../components/Bus/AddBus';
import AddUser from '../components/Customers/AddUser';
import Booking from '../components/Booking1/Booking';
import Payment from '../components/Payment/Payment';
import Ticket from '../components/Payment/Ticket';







function MainDash() {
  return (
    <div className="MainDash">
      <Routes>
      <Route exact path ='/' element ={<Cards/>}></Route> 
      {/* <Route path='/seats' element={<><SeatSelection /> <Footer /></>} />
      <Route path='/bookings' element={<><BusBooking/> <Footer /></>} />  */}
      {/* <Route exact path= "/buses" element ={<Card/>}></Route>  */}
      {/* <Route exact path= "/buses" element ={<Bus/>}></Route>  */}
      <Route exact path= "/buses" element ={<Buses/>}></Route> 
      
       <Route  exact path= "/routes" element ={<BusRoutes/>}></Route> 
       {/* <Route exact path= "/customers" element ={<Customers/>}></Route>  */}
       <Route exact path= "/customers" element ={<User/>}></Route> 
      <Route exact path= "/bookings" element ={<BusBooking/>}></Route>
      <Route exact path= "/add-bus" element ={<AddBus/>}></Route>
      <Route exact path= "/add-customer" element ={<AddUser/>}></Route>
  
      <Route exact path= "/seats-details" element ={<SeatSelection/>}></Route> 
      <Route exact path= "/seats" element ={<Booking/>}></Route>
      <Route exact path= "/payments" element ={<Payment/>}></Route>
      <Route exact path= "/ticket" element ={<Ticket/>}></Route>
      
  
      </Routes>
  </div>

  )
}

export default MainDash