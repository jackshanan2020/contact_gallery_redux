import * as actions from './actionTypes'

//search
export const searchContacts = (query) => {
    return dispatch => {
        dispatch({
            type: actions.SEARCH_CONTACT,
            payload: query
        })
    }
}

const fetchContactsSuccess = contacts => ({
    type: actions.FETCH_CONTACTS,
    payload: contacts
})
//fetch contacts
export const fetchContacts = (contacts) => {
    return dispatch => {
        dispatch(fetchContactsSuccess(contacts))
    }
}
//setting contact list data
export const setContacts = (contacts) => ({
    type: actions.SET_CONTACTS,
    payload:  contacts 
})
