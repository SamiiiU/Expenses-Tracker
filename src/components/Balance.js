import React ,{useContext } from 'react';

import { GlobalContext } from '../context/GlobalState';
import { ThemeContext } from '../context/GlobalState';
import ThemeIcon from '../context/ThemeIcon';

const Balance = () => {
  const {transactions} = useContext(GlobalContext);
  const { isDarkMode } = useContext(ThemeContext); 
  
  const amount = transactions.map(transactions => transactions.amount);


  const total = amount.reduce((acc , item) => (acc +=item) , 0).toFixed(2); 

  

  return (
    <>
        <div className='Balance-Box'>
            <div>
            <h4 className={(isDarkMode ? 'font-dark' : '')}>Your Balance</h4>
            <h1 className={(isDarkMode ? 'font-dark' : '')}>{Number(total).toLocaleString()} PKR</h1>
            </div>

            <div className='theme'>
              <ThemeIcon />
            </div>
        </div>
    
    </>
  )
}

export default Balance;
