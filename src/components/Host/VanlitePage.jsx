import React, { useState } from 'react';
import './Vanlite.css';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';


const VanlitePage = (props) => {
    // State to track the currently active section
    const [activeSection, setActiveSection] = useState('details'); // default to 'details'
    const {id} = useParams();
    const van = props.data.find((item)=> item.id=== id)
    return (
      <div className='vanlite'>
        <i className="fa-solid fa-arrow-left"></i><Link to="/admin">Back to all vans</Link>
        <div className='vanlite-wrapper'>
          <div className='vanlite-header'>
            <img src={van.imageUrl} alt={van.name}/>
            <div>
              <span className='van-cat'>{van.type}</span>
              <h1>{van.name}</h1>
              <p>${van.price}/day</p>
            </div>
          </div>
          
          <ul>
            <li><Link to="#" onClick={() => setActiveSection('details')}>Details</Link></li>
            <li><Link to="#" onClick={() => setActiveSection('pricing')}>Pricing</Link></li>
            <li><Link to="#" onClick={() => setActiveSection('photos')}>Photos</Link></li>
          </ul>
          
          {/* Conditionally render the details section */}
          {activeSection === 'details' && (
            <div className='vanlite-details'>
              <p><strong>Name: </strong>{van.name}</p>
              <p><strong>Category: </strong>{van.type.charAt(0).toUpperCase() + van.type.slice(1).toLowerCase()}</p>
              <p><strong>Description:</strong>{van.description}</p>
              <p><strong>Visibility:</strong> Public</p>       
            </div>
          )}
          
          {/* Conditionally render the pricing section */}
          {activeSection === 'pricing' && (
            <div className='vanlite-pricing'>
              <p>${van.price}<span>/day</span></p>
            </div>
          )}
  
          {/* Conditionally render the photos section */}
          {activeSection === 'photos' && (
            <div className='vanlite-photos'>
              <img className='vanlite-img' src={van.imageUrl} alt={van.name}/>
            </div>
          )}
        </div>
      </div>
    )
  }
  

export default VanlitePage