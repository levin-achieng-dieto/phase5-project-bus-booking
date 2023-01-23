import React from "react"
//import App from "./Buses/App";
import "./index.css"

function LevinHome({ levinUser }) {
    if (levinUser) {
        return (
        <>
            <h1>Welcome, {levinUser.username}!</h1>;
        </>
        )
        
    } else {
        return <h1>Please Login or Sign Up</h1>;
    }
}

export default LevinHome;
