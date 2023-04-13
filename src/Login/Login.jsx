import React, { useState } from 'react';
import "./Login.css";
import { Link } from 'react-router-dom';

function Login() {
    const [email, setEmail] =useState("")
    const [password, setPassword] =useState("")
    const handleSubmit =(e) =>{
        e.preventDefault()
        // handleLogin(email, password);
    }
    function redirect(){
      if (email!==" " && password!==""){
        // <Link to='/dashboard'></Link>
        window.location.href='/dashboard'
      }else{
        alert("Please fill out the form");
        window.location.href='/'
        // <Link to='/signup' ></Link>
      }
    }
    
  return (
    <div className='login'>
        <form onSubmit={handleSubmit} className='form'>
          <h1>Log In</h1>
            <input type='email' value={email} placeholder='example@gmail.com' onChange={(e) =>setEmail(e.target.value)} required/>
            <input type='password' value={password} placeholder='*****' onChange={(e) =>setPassword(e.target.value)} required/>
            <button type='submit' onSubmit={redirect} className='btn'><Link to ='/dashboard' >Login</Link></button>
        <span>Dont have an account? <Link to ='/signup' >Signup here</Link></span>
        <div className='alt-login'>
          <div className='facebook'><img src="https://www.citypng.com/public/uploads/preview/-11595326936asbkomoamd.png" alt='facebook' style={{width: "40%"}}/></div>
          <div className='google'><img src='https://icons.veryicon.com/png/o/application/fill-2/google-circle.png' alt='google' style={{width: "70%"}}/></div>
        </div>
        </form>

    </div>
  )
}

export default Login