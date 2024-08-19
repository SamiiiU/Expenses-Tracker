

export  default (state , action) => {
    switch(action.type){
        case 'DELETE':
            const updatedTransactions = state.transactions.filter(transaction => transaction.id !== action.payload);
            return {
                ...state,
                transactions: updatedTransactions
        }

        case 'ADD' :
            
            return{
                ...state,
                transactions : [action.payload , ...state.transactions],
            }

        

        case 'UPDATE' :

            state.transactions[action.index] = action.payload
            return{
                ...state,
            }

        default :
            return state;
    }
}
