import React, { useState, useEffect} from "react"
import './AdminLogin.css';
import profile from "./profile.png";
import email from "./email.jpg";
import pass from "./pass.png";
import { useNavigate, Link } from "react-router-dom"
import Header from "../../buses/Header";


function AdminLogin({adminUser}) {

  const navigate = useNavigate();
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  function handleSubmit(e){
    e.preventDefault();
    fetch("/admin-login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({username, password}),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => adminUser(user))
      }
      navigate("/")
    })
  }



  return (
    <>
      <Header></Header>
      <div className="main">
      <div className="sub-main">
        <div>
          <div className="imgs">
            <div className="container-image">
              <img src={profile} alt="profile" className="profile"/>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <h1 style={{ fontSize: "15px", fontFamily: "cursive", fontWeight: "bolder"}}>Admin Login Page</h1>
            <div>
              <img src={email} alt="email" className="email"/>
              <input type="username" placeholder="username" className="name" autoComplete="off" required value={username} onChange={(e) => setUsername(e.target.value)}/>
            </div>
            <div className="second-input">
              <img src={pass} alt="pass" className="email"/>
              <input type="password" placeholder="password" className="name" required autoComplete="off" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div className="login-button">
              <Link to="/home">
                <button type="submit">Login</button>
              </Link>
            </div>
            <div>
              <Link to="/adminsignup">
                <p className="link">
                  <p>Forgot password ?</p> Or <p>Sign Up</p>
                </p>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
    
  );
}

export default AdminLogin;