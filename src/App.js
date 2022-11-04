import './assets/styles/App.css';
import TxnsComponent from './components/TxnsComponent';
import AddBalanceComponent from './components/AddBalanceComponent';
import React from 'react';

function App() {
  return (
    <div className='outerContainer'>
      <h1 >Expense Tracker</h1>
      <AddBalanceComponent />
      <TxnsComponent />
    </div>
  );
}

export default App;
