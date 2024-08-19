import React , {useContext} from "react";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExp from "./components/Income-Exp";
import TransactionLi from "./components/TransactionLi";
import Add from "./components/Add";
import { ThemeContext } from '../src/context/GlobalState';


import './Tracker.css';

const Tracker = () => {
    const {isDarkMode} = useContext(ThemeContext);

    return(

        <div className={(isDarkMode ? 'AppDark' : 'AppLight'  )}>
            
            <Header />
            <div className="container">    
            
            
                <Balance />
                <IncomeExp />
                <TransactionLi />
                <Add />
                
            </div>

        </div>

    );
}


export default Tracker;
