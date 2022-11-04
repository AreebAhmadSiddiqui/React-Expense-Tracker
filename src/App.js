import './assets/styles/App.css';
import TxnsComponent from './components/TxnsComponent';
import AddBalanceComponent from './components/AddBalanceComponent';

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
