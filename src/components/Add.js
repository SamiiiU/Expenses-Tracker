import React , {useContext ,useState} from 'react'
import { GlobalContext } from '../context/GlobalState';
import { ThemeContext } from '../context/GlobalState';


const Add = () => {
    
    const {ToUpdate , setToUpdate , Update , transactions ,amount , setAmount,
      text , setText} = useContext(GlobalContext);  

    const {Add} = useContext(GlobalContext);

    const amounts = transactions.map(transactions => transactions.amount);

    const {isDarkMode} = useContext(ThemeContext);

    const onSubmit = e => {
      e.preventDefault();

      const newTransaction = {
        id : amounts.length + 1,
        text,
        amount : +amount,
      }

      Add(newTransaction);

    }

    const handleToUpdate = (e) =>{
      e.preventDefault()

    const UpdatedTransaction = {
        id : transactions[ToUpdate].id,
        text : text ,
        amount : +amount,
     }

     Update(UpdatedTransaction , ToUpdate)
     setAmount(0)
     setText("")
     setToUpdate(null)
    }
    


    
  return (
    <>
    <h3 className={(isDarkMode ? 'font-dark' : '')}>Add new transaction</h3>
    <form id="form"  >
        <div className="form-control">
          <label className={(isDarkMode ? 'font-dark' : '')}>Enter Text</label>
          <input type="text" className={isDarkMode ? 'dark-input' : ''} value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..."  required/>
        </div>
        <div className="form-control">
          <label className={(isDarkMode ? 'font-dark' : '')}>Enter Amount</label>
          <input type="number" className={isDarkMode ? 'dark-input' : ''}  value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." required/>
        </div>
        {ToUpdate && <button className="btn" onClick={handleToUpdate}>Update transaction</button>}
        <button className="btn" onClick={onSubmit}>Add transaction</button>
    </form>
    </>
  );
}

export default Add
