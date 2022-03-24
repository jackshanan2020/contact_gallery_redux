import * as actions from '../actions/actionTypes'
const initState = [];

const contactReducer = (state = initState, action) => {
    const query = action.payload;
    
    if (action.type === actions.FETCH_CONTACTS) {
        return [
            ...state,
            action.payload
        ]
    }
    else if (action.type === actions.SET_CONTACTS) {
        return [action.payload]
            
        
    }
    else if (action.type === actions.SEARCH_CONTACT) {
        const searchResult = (query) => state.filter(c => c.NAME === query || c.LOCATION===query)
        return searchResult(query)
    }
    return state;
}

export default contactReducer
