import React from "react";
import { Link } from "react-router-dom";
import "./index.css"

function LevinNav({ levinUser, setLevinUser, dietoUser, setDietoUser }) {
    function handleLogoutClick() {
        fetch("/admin-logout", { method: "DELETE" }).then((r) => {
        if (r.ok) {
            setLevinUser(null);
        }
        });
    }

    function handleClientLogoutClick() {
        fetch("/client-logout", { method: "DELETE" }).then((r) => {
        if (r.ok) {
            setDietoUser(null);
        }
        });
    }

    return (
        <header>
        <div>
            <Link to="/levinhome">admin Home</Link>
            <Link to="/dietohome" >client home</Link>
        </div>
        <div>
            {levinUser ? (
            <button onClick={handleLogoutClick}>Logout</button>
            ) : (
                <>
                    <button onClick={handleClientLogoutClick}>Logout</button>
                </>
            // <>
            //     <Link to="/levinsignup">Admin Signup</Link>
            //     <Link to="/levinlogin">Admin Login</Link>
            //     <Link to="/dietosignup">Client signup</Link>
            //     <Link to="/dietologin">Client Login</Link>
            // </>
            )}
            <>
                <Link to="/levinsignup">Admin Signup</Link>
                <Link to="/levinlogin">Admin Login</Link>
                <Link to="/dietosignup">Client signup</Link>
                <Link to="/dietologin">Client Login</Link>
            </>
        </div>
        </header>
    );
}

export default LevinNav;