import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./AdminSignUp.css"

function AdminLogin({setUserAdmin}){
    const navigate = useNavigate()
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
                r.json().then((user) => setUserAdmin(user))
            }
            navigate("/")
        })
    }


    return(
        <div>
            <div>
                <div>
                    <form onSubmit={handleSubmit}>
                        <h3 className="form">Admin Login</h3>
                        <div className="username">
                            <label htmlFor="username">Username</label>
                            <input type="username"
                            className="form-control"
                            id="username"
                            autoComplete="off"
                            placeholder="Enter Username"
                            required
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="password mb-3 was-validated">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                name="password"
                                required
                                placeholder="Enter password"
                                autoComplete="current-password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div>
                            <button type="submit" className="btn btn-success justify-conter-center">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default AdminLogin