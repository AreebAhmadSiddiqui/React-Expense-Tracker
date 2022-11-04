import React, { createContext } from 'react'

export const Data = createContext()

const getLocalStorageItems = () => {
    const txnArray = localStorage.getItem('transactions')
    return txnArray ? JSON.parse(txnArray) : []
}
function Context({ children }) {

    const [txnData, setTxnData] = React.useState(getLocalStorageItems)

    return <Data.Provider value={{ txnData, setTxnData }}>{children}</Data.Provider>
}

export default Context