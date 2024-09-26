import React from 'react';
import './Vanlite.css';
import List from './List'

const Vanlite = ({data}) => {
  console.log(data)
  return (
        <div className='vans-list'>
            <h1>Your Listed Vans</h1>
            <div>
                {data.map(item=> <List data= {item}/>)}
            </div>
        </div>
  )

}
export default Vanlite;
