import React from 'react'
import './Transaction.css'
import Record from './Record'
import IncomeChart from './IncomeChart'

const Transaction = () => {
  return (

    <div className='transaction'>
        <div>
            <h1 className='welcome-msg'>Income</h1>
            <p>Last <span>30 days</span></p>
            <h1 className='total-income'>$2260</h1>
        </div>
        <div className='transactions-container'>
            <h1>Your Transactions <span>($1060)</span></h1>
            <p>Last <a>30 days</a></p>
        </div>
        <IncomeChart/>
        <Record/>
        <Record/>
        <Record/>
    </div>
  )
}

export default Transaction