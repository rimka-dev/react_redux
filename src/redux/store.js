import { createStore, combineReducers, applyMiddleware } from 'redux';
import counterReducer from './reducers/counterReducer';
import addCartReducer from './reducers/addCartReducer';
import dataImgReducer from './reducers/dataImgReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({ // ici on peut combiner plusieurs reducer et les passer dans le store
    counterReducer,
    addCartReducer,
    dataImgReducer
})
//const Store = createStore(CounterReducer);

// const customMiddleware = store => next => action => { // un middleware se declanche achaque fois qu'on a un dispatch
//     // ici dans le middleware on peut executer se qu'on veux avant de dexecuter next() pour continuer l'action
//     console.log(action);
//     // const actionModif = {
//     //     type:"ADDCART",
//     //     payload: 1234
//     //   }
//     next(action);
// }
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;