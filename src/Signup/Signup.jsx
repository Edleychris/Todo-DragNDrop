import React, { useState } from 'react';
import "./Signup.css";
import { Link } from 'react-router-dom';

function Signup() {
  const [email, setEmail] =useState("")
  const [password, setPassword] =useState("")

  const handleSubmit =(e) =>{
      e.preventDefault()
      // handleSignup(email, password);
  }
  
  return (
    <div className='signup'>
    <form onSubmit={handleSubmit} className='form'>
      <h1>Sign Up</h1>
      <input type='text' name='Fname'id='Fname' placeholder='Full Name' required/>
        <input type='email' value={email} onChange={(e) =>setEmail(e.target.value)} placeholder='email' required/>
        <input type='password' value={password} onChange={(e) =>setPassword(e.target.value)} placeholder='password' required/>
        <input type='password' placeholder='comfirm password' required/>
        <button  className="btn"><Link to='/'>SignUp</Link>
</button>
        <span>Already have an account? <Link to='/'>Login</Link></span>
    </form>
</div>
  )
}
export default Signup