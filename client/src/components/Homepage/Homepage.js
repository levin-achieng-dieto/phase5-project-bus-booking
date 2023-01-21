import React from 'react';
import './Homepage.css';
import {Link} from "react-router-dom"

export default function Homepage({adminUser, setAdminUser}) {
    function handleLogoutClick() {
        fetch("/admin-logout", { method: "DELETE" }).then((r) => {
            if (r.ok) {
                setAdminUser(null);
            }
        });
        }
    
    return (

        <div className="homepage">
            <div className="header-nav">
                <span className="mytext1">Knight Travel Agencies</span>
            </div>
            <div className="container">
            <Link to="/">
                <div className="slogan">
                    <h1>
                        <span className="cc">ALWAYS TRAVEL</span>
                        <div className="message">
                            <div className="word1">uniquely</div>
                            <div className="word2">safely</div>
                            <div className="word3">with a smile</div>
                        </div>
                    </h1>
                </div>
            </Link>
                <div>
                    {adminUser ? (
                        <div>
                            <span onClick={handleLogoutClick}>Log out</span>
                        </div>
                    ) : (
                        <div>
                            <Link to="/adminlogin" className="mainBtn">
                                <svg width="277" height="62">
                                    <defs>
                                        <linearGradient id="grad1">
                                            <stop offset="0%" stopColor="black" />
                                            <stop offset="100%" stopColor="black" />
                                        </linearGradient>
                                    </defs>
                                    <rect x="5" y="5" rx="25" fill="none" stroke="url(#grad1)" width="266" height="50"></rect>
                                </svg>
                                <span>Get Started as an Admin</span> 
                            </Link>
                        </div>
                    )}
                </div>

                {/* <Link to="/adminlogin" className="mainBtn">
                    <svg width="277" height="62">
                        <defs>
                            <linearGradient id="grad1">
                                <stop offset="0%" stopColor="black" />
                                <stop offset="100%" stopColor="black" />
                            </linearGradient>
                        </defs>
                        <rect x="5" y="5" rx="25" fill="none" stroke="url(#grad1)" width="266" height="50"></rect>
                    </svg>
                    <span>Get Started as an Admin</span> 
                </Link>
                <Link to="/clientlogin" className="mainBtn">
                    <svg width="277" height="62">
                        <defs>
                            <linearGradient id="grad1">
                                <stop offset="0%" stopColor="black" />
                                <stop offset="100%" stopColor="black" />
                            </linearGradient>
                        </defs>
                        <rect x="5" y="5" rx="25" fill="none" stroke="url(#grad1)" width="266" height="50"></rect>
                    </svg>
                    <span>Get Started as client</span> 
                </Link>
                <Link to="/driverlogin" className="mainBtn">
                    <svg width="277" height="62">
                        <defs>
                            <linearGradient id="grad1">
                                <stop offset="0%" stopColor="black" />
                                <stop offset="100%" stopColor="black" />
                            </linearGradient>
                        </defs>
                        <rect x="5" y="5" rx="25" fill="none" stroke="url(#grad1)" width="266" height="50"></rect>
                    </svg>
                    <span>Get Started as driver</span> 
                </Link> */}
                
            </div>
        </div>
        
    )
}