import React from 'react';
import {Link} from 'react-router-dom'
import './Vans.css';
import VanCard from './VanCard';

const Vans = (props) => {
  return (
    <div className='vans'>
      <h1 className='vans-header'>Explore our van options</h1>
      
      {/* Filters */}
      <div className='vans-filter'>
        <span><Link to="/vans:type">Simple</Link></span>
        <span><Link to="/vans:type">Luxury</Link></span>
        <span><Link to="/vans:type">Rugged</Link></span>
        <Link to="/vans">Clear filters</Link>
      </div>

      {/* Van Cards */}
      <div className='card-container'>
        {props.data.vans.map((item) => (
          <VanCard key={item.id} data={item} id = {item.id} />
        ))}
      </div>
    </div>
  );
};

export default Vans;
