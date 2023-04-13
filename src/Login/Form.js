import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import Signup from '../Signup/Signup';


const Form = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const handleLogin = (email, password) => {
      if (email === userEmail && password === userPassword) {
        setIsLoggedIn(true);
      } else {
        alert("Invalid email or password");
      }
    };
    const handleSignup = (email, password) => {
      setUserEmail(email);
      setUserPassword(password);
      setIsLoggedIn(true);
    };
    return (
      <div>
        {isLoggedIn ? (
          <Link to='/dashboard' ></Link>
        ) : (
          <>
            <Login handleLogin={handleLogin} />
            <Signup handleSignup={handleSignup} />
          </>
        )}
      </div>
    );
  };
  
  export default Form;