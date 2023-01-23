import React, { useState } from "react";
import {Link} from "react-router-dom"

function DietoSignup({ setDietoUser }) {
    
    const [username, setUsername] = useState("")
    const [address, setAddress] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/client-signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username,
            password,
            password_confirmation: passwordConfirmation,
        }),
        }).then((r) => {
        if (r.ok) {
            r.json().then((user) => setDietoUser(user));
        }
        });
    }

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <h1>Sign Up</h1>
            <label htmlFor="username">Username</label>
            <input
            type="text"
            id="username"
            autoComplete="off"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="address">address</label>
            <input
            type="text"
            id="address"
            autoComplete="off"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            />
            <label htmlFor="email">email</label>
            <input
            type="text"
            id="email"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            />
            <label htmlFor="password">Password Confirmation</label>
            <input
            type="password"
            id="password_confirmation"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            autoComplete="current-password"
            />
            <Link to="/home"><button type="submit">Sign Up</button></Link>
        </form>
        </div>
    );
}

export default DietoSignup;
