import React from 'react';
import {Link} from "react-router-dom"

 function Home() {
  
  return (
    <header>
      <button className='branding'>
        <Link to="/"> Home</Link>
      </button>
      <div className='navigation'>
        <Link to="/customer-page">
          <button  style={{color: "black"}} className='btn'>DashBoard</button>
        </Link>
        <Link to="/buses">
          <button style={{color: "lack"}} className='btn'>Buses</button>
        </Link>
        <Link to="/">
          <button style={{color: "white"}} >LogOut</button>
        </Link>
      </div>
    </header>
  )
}

export default Home