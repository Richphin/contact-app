import { createStore,applyMiddleware, compose } from 'redux'
import contactReducer from '../reducers/contactReducers'
import { getFirebase,reduxReactFirebase } from "react-redux-firebase";
import { getFirestore,reduxFirestore } from "redux-firestore";
import firebase from "../firebase/config";
import thunk from 'redux-thunk';

 


 export const store = createStore(contactReducer,compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
    reduxReactFirebase(firebase),
    reduxFirestore(firebase)
));