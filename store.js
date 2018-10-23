
import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import productReducer from './reducers/productReducer';

const myLogger = (store) => (next) => (action) => {
    console.log("Action Logged", action);
    next(action)
};


const store = createStore(
    combineReducers({ productReducer }),
    {},
    applyMiddleware(myLogger, logger)
);
export default store;
