import React , {createContext , useReducer ,useState , useEffect} from "react";
import Appreducer from './Appreducer';


//Initial state

const initialstate = {
    transactions : JSON.parse(localStorage.getItem('transactions')) || 
    [
        { id: 1, text: 'Grocery', amount: -400 },
        { id: 2, text: 'Salary', amount: 20000 },
        { id: 3, text: 'Book', amount: -500 },
        { id: 4, text: 'Camera', amount: -2000 },

    ]

}

// Create COntext

export const GlobalContext = createContext(initialstate);

// Create Context
export const ThemeContext = createContext();
//Provider Component

export const GlobalProvider = ({children}) => {
    const[state , dispatch ] = useReducer(Appreducer , initialstate);
    const [isDarkMode, setIsDarkMode] = useState(() => {
        return JSON.parse(localStorage.getItem('isDarkMode')) || false;
    });

    useEffect(() => {
        // Update local storage whenever state changes
        localStorage.setItem('transactions', JSON.stringify(state.transactions));
    }, [state.transactions]);

    useEffect(() => {
        localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
    }, [isDarkMode]);

    
    const [text , setText] = useState('');
    const [amount , setAmount] = useState(0);
    const [ToUpdate , setToUpdate] = useState(null)

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    //Actions 

    function Delete(id){
        dispatch({
            type : "DELETE",
            payload : id,
        });
    }

    function Add(transaction){
        dispatch({
            type : "ADD",
            payload : transaction,
        });
    
    }

    function Update(UpdatedTransaction , ToUpdate){
        dispatch({
            type : 'UPDATE',
            payload : UpdatedTransaction,
            index : ToUpdate,
        })
    }

    return (
        <GlobalContext.Provider value={{
            transactions : state.transactions,
            Delete ,
            Add ,
            Update,
            ToUpdate , setToUpdate,
            amount , setAmount,
            text , setText
            
            }}>
            <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
                {children}
            </ThemeContext.Provider>
        </GlobalContext.Provider>

    );
}



