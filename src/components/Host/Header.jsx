import React, { useState } from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import Dashboard from './Dashboard'
import Vanlite from './Vanlite'
import Transaction from './Transaction'
import Reviews from './Reviews'

const Header = ({data}) => {
  const [selectedTab, setSelectedTab] = useState('dashboard')
  return (
    <>
      <div className='header'>
          <ul>
              <li><Link to="#" onClick={() => setSelectedTab('dashboard')}>Dashboard</Link></li>
              <li><Link to="#" onClick={() => setSelectedTab('transaction')}>Income</Link></li>
              <li><Link to="#" onClick={() => setSelectedTab('allvans')}>Vans</Link></li>
              <li><Link to="#" onClick={() => setSelectedTab('review')}>Reviews</Link></li>
          </ul>
      </div>
        {selectedTab === 'dashboard' && (<Dashboard data={data}/>)}
        {selectedTab === 'transaction' && (<Transaction/>)}
        {selectedTab === 'allvans' && (<Vanlite data={data}/>)}
        {selectedTab === 'review' && (<Reviews/>)}
    </>

  )
}

export default Header