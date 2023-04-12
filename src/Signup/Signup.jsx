import React, { useState } from 'react';
import "./Signup.css";

function Signup() {
  const [email, setEmail] =useState("")
  const [password, setPassword] =useState("")

  const handleSubmit =(e) =>{
      e.preventDefault()
  }
  return (
    <div className='signup'>
    <form onSubmit={handleSubmit} className='form'>
      <h1>Sign Up</h1>
        <input type='email' value={email} onChange={(e) =>setEmail(e.target.value)} placeholder='email'/>
        <input type='password' value={password} onChange={(e) =>setPassword(e.target.value)} placeholder='password'/>
        <button type='submit' className="btn">Signup</button>
        <span>Already have an account? <a href='http://localhost:3000'>Login</a></span>
    </form>
</div>
  )
}
export default Signup