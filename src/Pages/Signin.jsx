import React from 'react'
import './Signin.css'
import {Link} from 'react-router-dom'

const Signin = () => {
    return (
        <div className="sign-in-container">
          <h2 className="sign-in-heading">Sign in to your account</h2>
          <form className="sign-in-form">
              <input type="email" id="email" placeholder="Email address" required />
              <input type="password" id="password" placeholder="Password" required /> 
              <Link to='/admin'> <button type="submit" className="sign-in-button">Sign In</button></Link>
          </form>
          <p className="account-message">
            Don’t have an account? <span className="create-account">Create one now</span>
          </p>
        </div>
      );
    };

export default Signin