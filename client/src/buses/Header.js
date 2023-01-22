import React from 'react';
import {Link} from "react-router-dom"

 function Header() {
  

  return (
    <header>
    <button className='branding'>
   <Link to="/"> Home</Link>
        </button>
        
      <div className='navigation'>

      <Link to="/admin/home">
      <button style={{color: "black"}} className='btn'>DashBoard</button>
      </Link>
      <Link to="/admin/bus">
      <button  style={{color: "black"}} className='btn'>Buses</button>
      </Link>
      <Link to="/admin/routes">
      <button  style={{color: "black"}} className='btn'>Routes</button>
      </Link>
    
      <Link to="/admin/bookings">
      <button  style={{color: "black"}} className='btn'>Bookings</button>
      </Link>

      <Link to="/">
      <button style={{color: "white"}} >LogOut</button>
      </Link>
        </div>
     
    </header>
   
  )
}

export default Header