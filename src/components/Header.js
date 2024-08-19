import React, { useContext } from "react";
import { ThemeContext } from "../context/GlobalState";


 const Header = () =>{
    const {isDarkMode} = useContext(ThemeContext);
    
   
    return(
        <div className= {isDarkMode ? 'Header-dark' : 'Header'}>
            Expense Tracker
        </div>
    )
    
}

export default Header;
