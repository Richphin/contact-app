import { createStore } from 'redux'
import contactReducer from '../reducers/contactReducers'

 


 export const store = createStore(contactReducer)