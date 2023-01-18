import React from "react"
import Sidebar from "./SideBar/SideBar"
import MainDash from "../MainDash/MainDash"
// import "./Home.css"
import "./SideBar/SideBar.css"
import "../MainDash/MainDash.css"

function Home(){
    return(
        <div id="siderbar-and-maindash">
            <Sidebar />
            <MainDash />
        </div>
    )
}
export default Home