
import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import productReducer from './reducers/productReducer';
import bannerReducer from './reducers/bannerReducer';
import thunk from 'redux-thunk';
const myLogger = (store) => (next) => (action) => {
    console.log("Action Logged", action);
    next(action)
};

const store = createStore(
    combineReducers({ productReducer, bannerReducer }),
    {},
    applyMiddleware(myLogger, logger, thunk)
);
export default store;
