import React from 'react'
import './About.css'
import pic from '../assets/van.jpg'
import {Link} from 'react-router-dom'

const About = () => {
  return (
    <div className='about'>
        <img className='about-img' src={pic}/>
        <h1 className='about-title'>
            Don’t squeeze in a sedan when you could relax in a van.</h1>
        <p className='about-content'>
            Our mission is to enliven your road trip with the perfect travel van rental. 
            Our vans are recertified before each trip to ensure your travel plans can go off 
            without a hitch. (Hitch costs extra 😉)
            Our team is full of vanlife enthusiasts who know firsthand the magic of touring 
            the world on 4 wheels.</p>
        <div className='about-explore'>
            <h1 className='explore-title'>Your destination is waiting.<br/>Your van is ready.</h1>
            <Link className="explore-btn" to="/vans">Explore our vans</Link>
        </div>
    </div>
  )
}

export default About