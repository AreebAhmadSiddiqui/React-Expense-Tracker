import React from 'react'
import { RiDeleteBinLine } from 'react-icons/ri'
import { useContext } from 'react'
import { Data } from '../Context'
import { format } from 'date-fns'
function TxnComponent({ amount, description, type, id }) {

    const { txnData, setTxnData } = React.useContext(Data)

    function handleClick() {

        const txnArray = txnData.filter((items) => items.id !== id)
        setTxnData(txnArray)
        localStorage.setItem('transactions',JSON.stringify(txnArray))
    }

    // const date=new Date()
    return (
        type === 'expense' ?
            <div className='txnContainerExpense'>
                {/* <p>{date.toLocaleDateString()}</p> */}
                <p>{description}</p>
                <p>${amount}</p>
                <button onClick={handleClick} className='delBtn'><RiDeleteBinLine /></button>
            </div> :
            <div className='txnContainerIncome'>
                {/* <p>{date.toLocaleDateString()}</p> */}
                <p>{description}</p>
                <p>${amount}</p>
                <button onClick={handleClick} className='delBtn'><RiDeleteBinLine /></button>
            </div>
    )
}

export default TxnComponent