import React , {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';
import { ThemeContext } from '../context/GlobalState';
import { FaPen } from "react-icons/fa";


const TransactionLi = () => {
  const { setToUpdate, transactions , Delete , Update ,amount , setAmount,
    text , setText} = useContext(GlobalContext);
    
  
  const {isDarkMode} = useContext(ThemeContext);
    
  const handleUpdate = (transaction , key) => {
      setAmount(transaction.amount)
      setText(transaction.text)
      setToUpdate(key)
    
  }


  

  return (
    <div>
      <h3 className={(isDarkMode ? 'font-dark' : '')}>History</h3>
      <ul className=  {(isDarkMode ? 'list-dark' : 'list')}>
        
        {transactions && transactions.map((transactions ,key) => ( 
          
        <li key={key} className= {(transactions.amount >= 0 ? 'plus' : 'minus')}>    
          {transactions.text} <span>{(transactions.amount) >= 0 ? '+' : '-'}{Math.abs(transactions.amount)} PKR</span>
          <button  className={(isDarkMode ? 'edit-btn-dark' : 'edit-btn')} onClick={() => {handleUpdate(transactions , key) }  }><FaPen /></button>
          <button onClick={() => {Delete(transactions.id) }  } className="delete-btn">x</button>
        </li>
        ))}
        
      </ul>
    </div>
    
  );
}

export default TransactionLi;
