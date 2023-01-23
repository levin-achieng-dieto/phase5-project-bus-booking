import React, { useState } from "react";
import "./index.css"

function LevinSignUp({ setLevinUser }) {
    // const navigate = useNavigate();
    const [username, setUsername] = useState("")
    const [mobile, setMobile] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/admin-signup", {
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
            r.json().then((user) => setLevinUser(user));
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
            <label htmlFor="mobile">Mobile</label>
            <input
            type="text"
            id="mobile"
            autoComplete="off"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
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
            <button type="submit">Admin Sign Up</button>
        </form>
        </div>
    );
}

export default LevinSignUp;
