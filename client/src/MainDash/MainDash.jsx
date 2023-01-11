import React from 'react'
import Cards from '../components/Cards/Cards';
import "./MainDash.css";
// import BusTable from '../components/Table/BusTable';
import {Routes,Route} from "react-router-dom"
import BusRoutes from '../components/Routes/BusRoutes';
import Buses from '../components/Bus/Buses';
import Customers from '../components/Customers/Customers';
import SeatSelection from '../components/Seats/SeatSelection';
import BusBooking from '../components/Bookings/BusBooking';
import Footer from '../components/Footer/Footer';




function MainDash() {
  return (
    <div className="MainDash">
      <Routes>
      {/* <Route exact path ='/' element ={<Cards/>}></Route> */}
      <Route path='/' element={<><Cards /> <Footer /></>} />
      <Route path='/buses' element={<><Buses /> <Footer /></>} />
      <Route path='/routes' element={<><BusRoutes /> <Footer /></>} />
      <Route path='/customers' element={<><Customers /> <Footer /></>} />
      <Route path='/seats' element={<><SeatSelection /> <Footer /></>} />
      <Route path='/bookings' element={<><BusBooking/> <Footer /></>} />
      {/* <Route exact path= "/buses" element ={<Buses/>}></Route> */}
      {/* <Route  exact path= "/routes" element ={<BusRoutes/>}></Route> */}
      {/* <Route exact path= "/customers" element ={<Customers/>}></Route> */}
      {/* <Route exact path= "/seats" element ={<SeatSelection/>}></Route> */}
      {/* <Route exact path= "/bookings" element ={<BusBooking/>}></Route> */}
      
  
      </Routes>
  </div>

  )
}

export default MainDash