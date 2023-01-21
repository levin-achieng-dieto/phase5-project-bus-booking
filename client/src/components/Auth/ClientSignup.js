import React, {useState} from 'react'
import bgImg from './bus.avif';
//import { useForm } from 'react-hook-form';
import "./AdminSignUp.css"
import { useNavigate } from "react-router-dom"

function ClientSignUp({setClientUser}) {

    const navigate = useNavigate();
    const [username, setUsername] = useState("")
    const [address, setAddress] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")

    function handleSubmit(e){
        e.preventDefault();
        fetch("/client-signup", {
            mathod: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                address,
                email,
                password,
                password_confirmation: passwordConfirmation
            })
        }).then((r) => {
            if (r.ok) {
                r.json().then((user) => setClientUser(user))
            }
            navigate("/layout")
        });
    }
    
  return (
    <section>
        <div className="register">
            <div className="col-1">
                <h2 style={{color:"#092147"}} >Client Sign Up</h2>
                <span style={{color: "black", fontFamily:"cursive"}}>register and enjoy the service</span>

                <form onSubmit={handleSubmit}  id='form' className='flex flex-col'>
                    <input type="text" placeholder='username' required autoComplete='off' value={username} onChange={(e) => setUsername(e.target.value)} />
                    <input type="text" placeholder='address' required autoComplete='off' value={address} onChange={(e) => setAddress(e.target.value)} />
                    <input type="text" placeholder='email' required autoComplete='off' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="text" placeholder='password' id='password_confirmation' name='password_confirmation' required autoComplete='current-password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <input type="text" placeholder='confirm password' id='password' name='password' required autoComplete='current-password' value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)}/>
                    <div>
                        <button type='submit' className='btn'>Sign Up</button>
                    </div>
                </form>
            </div>
            <div className="col-2">
                <img src={bgImg} alt="" />
            </div>
        </div>
    </section>
  )
}

export default ClientSignUp