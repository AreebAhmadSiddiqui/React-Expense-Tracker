import React from 'react'
function OutputComponent({ expense, income }) {

  return (
    <div className='outputContainer'>
      <div className='card'>
        Expense <span style={{ color: 'red', fontWeight: 'bold', fontSize: '20px' }}> ${expense}</span>
      </div>
      <div className='card'>
        Income <span style={{ color: 'green', fontWeight: 'bold', fontSize: '20px' }}> ${income} </span>
      </div>
    </div>
  )
}

export default OutputComponent