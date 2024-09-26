import React from 'react'
import './VanPage.css'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';


const VanPage = (props) => {
  const { id } = useParams();  // Extract `id` from URL
  const van = props.data.find(v => v.id === id);
  if (!van) {
    return <p>Van not found</p>;
  }
  
  else

  return (
    <div className='vanpage'>
        <i class="fa-solid fa-arrow-left"></i><Link to='/vans'>Back to all vans</Link>
        <div>
            <img className="van-img" src={van.imageUrl}/>
            <span className='van-cat'>{van.type}</span>
            <h1 className='van-title'>{van.name}</h1>
            <p className='van-pc'>${van.price}/day</p>
            <p className='van-content'> {van.description}</p>
            <button className='van-rent-btn'>Rent this van</button>
        </div>
    </div>
  )
}

export default VanPage