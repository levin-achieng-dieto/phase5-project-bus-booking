import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

function NavBar({ userAdmin, setUserAdmin }){

    function handleLogoutClick(){
        fetch("/admin-logout", { method: "DELETE"}).then((r) => {
            if (r.ok) {
                setUserAdmin(null)
            }
        })
    }


    return (
        <header>
            <div className="flex">
                <div>
                    <Link to="/">Bus Booking</Link>
                </div>
                <div>
                    {userAdmin ? (
                        <>
                            <button onClick={handleLogoutClick}>Logout</button>
                        </>
                    ) : (
                        <div class="flex">
                            <Link to="/admin-signup" className="signup">Signup</Link>
                            <Link to="/Admin-login" className="login">Login</Link>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}
export default NavBar