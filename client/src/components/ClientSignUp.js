import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import "./AdminSignUp.css"

function ClientSignUp(){
    const navigate = useNavigate("")
    const [username, setUsername] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    // t.string "username"
    // t.string "email"
    // t.string "password_digest"
    // t.string "phone_number"
    // t.datetime "created_at", null: false
    // t.datetime "updated_at", null: false
    // t.string "address"
    const [userClient, setUserClient] = useState(null)

    useEffect(() => {
        fetch("/client-me").then((r) => {
        if (r.ok){
            r.json().then((user) => setUserClient(user))
        }
        })
    }, []);


    function handleSubmit(e){
        e.preventDefault();
        fetch("/client-signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                phone_number: phoneNumber,
                address,
                email,
                password,
                password_confirmation: passwordConfirmation
            }),
        }).then((r) => {
            if (r.ok) {
                r.json().then((user) => userClient(user));
            }
            navigate("/")
        });
    }


    return (
        <div className="container mt-5">
            <div className="row d-flex justify-content-center">
                <div className="col-md-4">
                    <form onSubmit={handleSubmit} className="form">
                        <h3 className="sign">Admin Signup</h3>
                        <div className="username">
                            <label htmlFor="username">Username</label>
                            <input
                                type="username"
                                className="form-control"
                                id="username"
                                required
                                autoComplete="off"
                                placeholder="Enter Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="phonenumber">
                            <label>Phone_number</label>
                            <input
                                type="phone_number"
                                className="form-control"
                                id="pnone_number"
                                required
                                autoComplete="off"
                                placeholder="Enter PhoneNumber"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                        </div>
                        <div className="address">
                            <label>Address</label>
                            <input
                                type="address"
                                className="form-control"
                                id="address"
                                required
                                autoComplete="off"
                                placeholder="Enter Address"
                                value={phoneNumber}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </div>
                        <div className="email">
                            <label>Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                required
                                autoComplete="off"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="password">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password_confirmation"
                                name="password_confirmation"
                                required
                                placeholder="Enter password"
                                autoComplete="current-password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="confirm-password">
                            <label>Password Confirmation</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                name="password"
                                required
                                placeholder="Enter password"
                                autoComplete="current-password"
                                value={passwordConfirmation}
                                onChange={(e) => setPasswordConfirmation(e.target.value)}
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
export default ClientSignUp