import { createStore,applyMiddleware, compose,combineReducers } from 'redux'
import contactReducer from '../reducers/contactReducers'
import { getFirebase,reduxReactFirebase,firebaseReducer } from "react-redux-firebase";
import { getFirestore,reduxFirestore } from "redux-firestore";
import firebase from "../firebase/config";
import thunk from 'redux-thunk';

const Allreducers =combineReducers({
    userState:contactReducer,
    firebaseState: firebaseReducer,
})


 export const store = createStore(Allreducers,compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
    reduxReactFirebase(firebase),
    reduxFirestore(firebase)
));