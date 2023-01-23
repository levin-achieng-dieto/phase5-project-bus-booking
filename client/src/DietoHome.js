import React from "react"
//import App from "./Buses/App";
import "./index.css"

function DietoHome({ dietoUser }) {
    if (dietoUser) {
        return (
        <>
            <h1>Welcome, {dietoUser.username}!</h1>;
        </>
        )
        
    } else {
        return <h1>Please Login or Sign Up</h1>;
    }
}

export default DietoHome;