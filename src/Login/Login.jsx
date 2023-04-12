import React, { useState } from 'react';
import "./Login.css";

function Login() {
    const [email, setEmail] =useState("")
    const [password, setPassword] =useState("")
    const handleSubmit =(e) =>{
        e.preventDefault()
    }
  return (
    <div className='login'>
        <form onSubmit={handleSubmit} className='form'>
          <h1>Log In</h1>
            <input type='email' value={email} placeholder='example@gmail.com' onChange={(e) =>setEmail(e.target.value)}/>
            <input type='password' value={password} placeholder='*****' onChange={(e) =>setPassword(e.target.value)}/>
            <button type='submit' className='btn'>Login</button>
        <span>Dont have an account? <a href='http://localhost:3000/singup'>Signup</a></span>
        <div className='alt-login'>
          <div className='facebook'><img src="https://www.citypng.com/public/uploads/preview/-11595326936asbkomoamd.png" alt='facebook' style={{width: "40%"}}/></div>
          <div className='google'><img src='https://icons.veryicon.com/png/o/application/fill-2/google-circle.png' alt='google' style={{width: "70%"}}/></div>
        </div>
        </form>

    </div>
  )
}

export default Login