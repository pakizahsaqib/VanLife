import React from 'react'
import './List.css'
import { Link } from 'react-router-dom';


const List = ({data}) => {

  return (
    <Link to={`/allvans/${data.id}`}>
    <div className='list-item'>
            <img className='item-img' src={data.imageUrl} />
            <div>
                <h3>{data.name}</h3>
                <p>${data.price}/day</p>
            </div>
            <a className='edit-link'>Edit</a>
        </div>
    </Link>
  )
}

export default List