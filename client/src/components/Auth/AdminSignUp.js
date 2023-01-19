import React from 'react'
import bgImg from './bus.avif';
import { useForm } from 'react-hook-form';
import "./AdminSignUp.css"
import {Link} from "react-router-dom"

export default function AdminSignUp() {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);

    // console.log(watch('username'));
    
  return (
    <section>
        <div className="register">
            <div className="col-1">
                <h2 style={{color:"#092147"}} >Sign In</h2>
                {/* <span style={{color: "black", fontFamily:"cursive"}}>Sign-in and enjoy the service</span> */}
                <br/>
                <span style={{color: "blue", fontFamily:"cursive"}}>Register as driver/customer</span>

                <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" {...register("username")} placeholder='username' />
                    <input type="text" {...register("mobile", { required : true, maxLength: 10 })} placeholder='mobile number' />
                    {errors.mobile?.type === "required" && "Mobile Number is required"}
                    {errors.mobile?.type === "maxLength" && "Max Length Exceed"}
                    <input type="text" {...register("email")} placeholder='email' />
                    <input type="text" {...register("password")} placeholder='password' />
                    <input type="text" {...register("confirmpwd")} placeholder='confirm password' />
                    <Link to="/login">
                    <button className='btn'>Sign In</button>
                    </Link>
                </form>

            </div>
            <div className="col-2">
                <img src={bgImg} alt="" />
            </div>
        </div>
    </section>
  )
}