import React from 'react'
import {Link} from "react-router-dom"

function Ticket () {
  return (
    <div>
        <ul>
    <p>An email has been sent to your email address{"/n"} (Levin@gmail.com). Don't forget to look in your spam folder.{"/n"} Safe Journey .</p>

    <h4 style={{color: "red"}}>Note: If you havent made a deposit by 3 days your reservation will be cancelled.</h4>
    </ul>
    <button style={{backgroundColor: "lightblue", marginLeft:"600px"}}>
        <Link style={{color: "black"}} to ="/payments">Back</Link>
        </button>
    </div>
  )
}

export default Ticket;