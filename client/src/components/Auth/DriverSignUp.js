import React, {useState} from 'react'
import bgImg from './bus.avif';
//import { useForm } from 'react-hook-form';
import "./AdminSignUp.css"
import { useNavigate } from "react-router-dom"

function DriverSignUp({setDriveruser}) {

    const navigate = useNavigate();
    const [username, setUsername] = useState("")
    const [mobile, setMobile] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")

    function handleSubmit(e){
        e.preventDefault();
        fetch("/driver-signup", {
            mathod: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                mobile,
                email,
                password,
                password_confirmation: passwordConfirmation
            })
        }).then((r) => {
            if (r.ok) {
                r.json().then((user) => setDriveruser(user))
            }
            navigate("/layout")
        });
    }
    
  return (
    <section>
        <div className="register">
            <div className="col-1">
                <h2 style={{color:"#092147"}} >Driver Sign Up</h2>
                <span style={{color: "black", fontFamily:"cursive"}}>register and enjoy the service</span>

                <form onSubmit={handleSubmit}  id='form' className='flex flex-col'>
                    <input type="text" placeholder='username' required autoComplete='off' value={username} onChange={(e) => setUsername(e.target.value)} />
                    <input type="text" placeholder='mobile number' required autoComplete='off' value={mobile} onChange={(e) => setMobile(e.target.value)} />
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

export default DriverSignUp