import React from 'react'
import './ErrorPage.css'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='errorpage'>
        <h1 className='error'>Sorry, the page you were looking for was not found.</h1>
        <Link to='/'><button className='err-btn'>Return to home</button></Link>
    </div>
  )
}

export default ErrorPage