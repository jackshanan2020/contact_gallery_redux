import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore ,applyMiddleware} from "redux";
import { Provider } from "react-redux";
import thunk from 'redux-thunk'
import contactReducer from './redux/reducers';
import {
  searchContacts,
  fetchContacts,setContacts
} from './redux/actions'
import contact_card from './__mocks__/contact_card';
//-------------------------------------------------------------------------
const store = createStore(contactReducer,applyMiddleware(thunk))

//store.dispatch(fetchContacts(contact_card));
store.dispatch(setContacts(contact_card))

//log to console
store.subscribe(() => console.log(store.getState()))
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
