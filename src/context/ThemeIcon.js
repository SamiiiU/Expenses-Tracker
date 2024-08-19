import React , {useContext} from 'react'
import { ThemeContext } from './GlobalState'

const ThemeIcon = () => {
    const {  toggleDarkMode , isDarkMode } = useContext(ThemeContext); 
  return (
    <div>
      <i className= {`fa-solid fa-lightbulb ${isDarkMode ? 'font-dark' : ''}`} onClick={toggleDarkMode}></i>
    </div>
  )
}

export default ThemeIcon
