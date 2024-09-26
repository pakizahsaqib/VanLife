import React from 'react'
import './Reviews.css'
import Reviewcard from './Reviewcard'

const Reviews = () => {
  return (
    <div className='reviews'>
        <h1>Your reviews <span>last <a>30 days</a></span></h1>
        <p><strong>5.0</strong><i class="fa-solid fa-star"></i><span>overall rating</span></p>
        <div className='ratings'>
            <div className='rating-bar'>
                <p>5</p>
                <div className='bar' id='color' />
                <p>100%</p>
            </div>
            <div  className='rating-bar'>
                <p>4</p>
                <div className='bar'/>
                <p>0%</p>
            </div>
            <div  className='rating-bar'>
                <p>3</p>
                <div className='bar'/>
                <p>0%</p>
            </div>
            <div  className='rating-bar'>
                <p>2</p>
                <div className='bar'/>
                <p>0%</p>
            </div>
            <div  className='rating-bar'>
                <p>1</p>
                <div className='bar'/>
                <p>0%</p>
            </div>
        </div>
        <h1>Reviews</h1>
        <Reviewcard/>
        <Reviewcard/>
        <Reviewcard/>
        
    </div>
  )
}

export default Reviews