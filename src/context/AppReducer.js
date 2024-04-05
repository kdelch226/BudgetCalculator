export default (state, action) => {
    switch (action.type) {
        case 'DELETE_TRANSACTION':
            console.log(state.transactions);
            return {
                ...state,
                transactions: state.transactions.filter(trans =>
                    trans.id !== action.payload)
            };
        case 'ADD_TRANSACTION':

            return {
                ...state,
                transactions:[...state.transactions, action.payload]
            }
        default:
            return state;
    }
}