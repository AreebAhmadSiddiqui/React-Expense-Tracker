import React, { useState } from 'react'
import AddTxnContainer from './AddTxnContainer'
import OutputComponent from './OutputComponent'
import { Data } from '../Context'

function AddBalanceComponent() {

    const [isAdd, setIsAdd] = useState(false)
    function handleClick() {
        setIsAdd((prevIsAdd) => !prevIsAdd)
    }

    const { txnData, setTxnData } = React.useContext(Data)

    const amountsArray = txnData ? txnData.map((item) => item.type === 'income' ? item.amount : -item.amount) : []

    let balance = 0
    let income = 0
    let expense = 0

    // const balance = amountsArray.length ? amountsArray.reduce((acc, item) => (acc += item, 0)) : 0
    // console.log(balance)

    // const income = amountsArray.length ? amountsArray.filter(item => item > 0).reduce((acc, item) => (acc += item), 0) : 0
    // const expense = amountsArray.length ? amountsArray.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) : 0


    if (amountsArray.length > 0) {
        amountsArray.forEach(val => {
            if (val >= 0) {
                income += val
            }
            else {
                expense += val
            }
            balance += val
        });
    }
    // useEffect(() => {

    //     if (txnData.length > 0) {

    //         txnData.forEach((item) => {
    //             if (item.type === 'income') {
    //                 setIncome((prevIncome) => prevIncome + item.amount)
    //                 setBalance((prevBalance) => prevBalance + item.amount)
    //             }
    //             else {
    //                 setExpense((prevExpense) => prevExpense + item.amount)
    //                 setBalance((prevBalance) => prevBalance - item.amount)
    //             }    
    //         });
    //     }
    // }, [txnData])

    // console.log(income,expense)


    return (
        <div className='balanceContainer'>
            <div className='addContainer'>
                <h3>Balance:{balance >= 0 ? <span style={{ color: 'green', fontWeight: 'bold', fontSize: '25px' }}> ${balance}</span> : <span style={{ color: 'red', fontWeight: 'bold', fontSize: '25px' }}> ${balance}</span>}</h3>
                <button className='addBtn' onClick={handleClick}>{isAdd ? "Cancel" : "ADD"}</button>
            </div>
            {isAdd && <AddTxnContainer
                isAdd={isAdd}
                setIsAdd={setIsAdd} />}
            <OutputComponent
                expense={expense}
                income={income} />
        </div>
    )
}

export default AddBalanceComponent
