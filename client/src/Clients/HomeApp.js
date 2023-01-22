import React from 'react'
import {Routes,Route} from "react-router-dom"
// import Cards from '../components/Cards/Cards';
import SeatSelection from '../components/Seats/SeatSelection';
import BookingForm from './BookingForm';
import BusList from './BusesList';
import Home from "./Home";
// import Homepage from './Homepage';
import PaymentTab from "./Payment/PaymentTab";
import TicketPage from './TicketPage/TicketPage';

function HomeApp() {
  return (
    <>
   
    <Routes >
     {/* <Route exact path ='/home' element ={<Cards/>}></Route> */}
     <Route exact  path ='/buses' element ={<BusList/>}></Route>
     <Route exact  path ='/bookings' element ={<BookingForm/>}></Route>
     <Route exact path ='/seat-selection' element ={<SeatSelection/>}></Route>
     <Route exact path ='/payment' element ={<PaymentTab/>}></Route>
     <Route exact path ='/ticket' element ={<TicketPage/>}></Route>
    {/* <Route   path ='/' element ={<Homepage/>}></Route> */}
    
  
     </Routes>
     </>
  )
}

export default HomeApp
