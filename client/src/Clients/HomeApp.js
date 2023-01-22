import React from 'react'
import {Routes,Route} from "react-router-dom"
import Cards from '../components/Cards/Cards';
import SeatSelection from '../components/Seats/SeatSelection';
import BookingForm from './BookingForm';
import BusList from './BusesList';
import Home from "./Home";
import Homepage from './Homepage';
import PaymentTab from "./Payment/PaymentTab";
import TicketPage from './TicketPage/TicketPage';

function HomeApp() {
  return (
    <>
    <Home/>
    <Routes >
    <Route  exact path ='/' element ={<Homepage/>}></Route>
     <Route  path ='/home' element ={<Cards/>}></Route>
     <Route  path ='/buses' element ={<BusList/>}></Route>
     <Route  path ='/bookings' element ={<BookingForm/>}></Route>
     <Route  path ='/seat-selection' element ={<SeatSelection/>}></Route>
     <Route  path ='/payment' element ={<PaymentTab/>}></Route>
     <Route  path ='/ticket' element ={<TicketPage/>}></Route>
    
     
   

     </Routes>
     </>
  )
}

export default HomeApp
