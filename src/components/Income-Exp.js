import React ,{useContext} from 'react'
// import TransactionLi from './TransactionLi';
import { GlobalContext } from '../context/GlobalState';
import { ThemeContext } from '../context/GlobalState';


const IncomeExp = () => {
  const {transactions} = useContext(GlobalContext);
  const { isDarkMode } = useContext(ThemeContext); 

  const amount = transactions.map(transactions => transactions.amount);

  

  const income = amount.filter(item => item > 0).reduce((acc, item) => acc += item, 0).toFixed(2);
                  
  const expense = (amount.filter(item => item < 0).reduce((acc, item) => acc += item, 0) * -1).toFixed(2);
  
  
  // console.log(expense , income)
  return (
    <div>
      <div className={isDarkMode ? 'inc-exp-container-dark' : 'inc-exp-container'}>
        <div>
          <h4>Income</h4>
          <p id="money-plus" className="money plus">+{Number(income).toLocaleString()} PKR</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" className="money minus">-{Number(expense).toLocaleString()} PKR</p>
        </div>
      </div>
    </div>
  )
}

export default IncomeExp;
