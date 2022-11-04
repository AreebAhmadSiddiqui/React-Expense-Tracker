import React from 'react'
import { Data } from '../Context'
import { useEffect } from 'react'

function AddTxnContainer({ isAdd, setIsAdd }) {

    const { txnData, setTxnData } = React.useContext(Data)

    const [formData, setFormData] = React.useState({
        amount: "",
        description: "",
        type: ""
    })

    function handleChange(event) {
        const { name, value, type, checked } = event.target
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [name]: type === 'checkbox' ? checked : value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        setIsAdd(!isAdd)

        setTxnData([...txnData, {
            id: Math.floor(Math.random() * 100000) + 1,
            amount: Number(formData.amount),
            description: formData.description,
            type: formData.type
        }])
    }


    useEffect(() => {
        localStorage.setItem('transactions', JSON.stringify(txnData))
    }, [txnData])

    return (
        <form className='addTxn' onSubmit={handleSubmit}>
            <input
                type='number'
                placeholder='Amount'
                onChange={handleChange}
                name='amount'
                value={formData.amount}
            />
            <input
                type='text'
                placeholder='Description'
                onChange={handleChange}
                name='description'
                value={formData.description}
            />

            <div className='radioBtn'>
                <input
                    type='radio'
                    id='income'
                    name='type'
                    value='income'
                    onChange={handleChange}
                    checked={formData.type === 'income'}
                />
                <label htmlFor='income'>Income</label>
                <input
                    type='radio'
                    id='expense'
                    name='type'
                    value='expense'
                    onChange={handleChange}
                    checked={formData.type === 'expense'}
                />
                <label htmlFor='expense'>Expense</label>
                <br />
            </div>
            <button className='addBtn'>Add Transaction</button>
        </form>
    )
}
export default AddTxnContainer