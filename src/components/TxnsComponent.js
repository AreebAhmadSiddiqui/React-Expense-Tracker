import React from 'react'
import { useContext } from 'react'
import { Data } from '../Context'
import TxnComponent from './TxnComponent'
import { useState } from 'react'

function TxnsComponent() {

  const { txnData, setTxnData } = useContext(Data)
  const [searchText, setSearchText] = useState("")

  function handleChange(event) {
    const { value } = event.target
    setSearchText(value)
  }
  const Transactions = txnData.filter((val) => {
    if (searchText === "") {
      return val
    }
    else if (val.description.toLowerCase().includes(searchText.toLowerCase())) {
      return val
    }
  }).map((item) => {
    return (
      <TxnComponent
        amount={item.amount}
        description={item.description}
        type={item.type}
        key={item.id}
        id={item.id}
      />
    )
  })
  return (
    <div className='txns'>
      <h4>Transactions</h4>
      <input
        type='text'
        placeholder='Search'
        onChange={handleChange}
        name='searchText'
        value={searchText}
      />
      {Transactions}
    </div>
  )
}
export default TxnsComponent
