import React from 'react'
import {Link} from "react-router-dom"

function Payment() {
  return (
    <div>
        <ul>
    <p>Please send your money to 0717456520 Peter Lemaron. A Printable PDF ticket  {'\n'} will be sent to your email  upon payment completion. So  {'\n'} please ensure you provide a valid email address.</p>

    <h4 style={{color: "red"}}>Note: If you havent made a deposit by 3 days your reservation will be cancelled.</h4>
    </ul>
    <button style={{backgroundColor: "lightblue", marginLeft:"600px"}}>
        <Link style={{color: "black"}} to ="/ticket">Finish</Link>
        </button>
    </div>

  )
}

export default Payment