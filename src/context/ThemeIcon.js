import React , {useContext} from 'react'
import { ThemeContext } from './GlobalState'
import { FaLightbulb } from "react-icons/fa";

const ThemeIcon = () => {
    const {  toggleDarkMode , isDarkMode } = useContext(ThemeContext); 
  return (
    <div className= {isDarkMode ? 'font-dark' : ''} onClick={toggleDarkMode}>
      <FaLightbulb />
    </div>
  )
}

export default ThemeIcon
