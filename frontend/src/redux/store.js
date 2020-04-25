import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import authReducer from "./authReducer";
import ordersReducer from "./ordersReducer";

let reducers = combineReducers({
    authorisationData: authReducer,
    orders: ordersReducer,
    form: formReducer,
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunkMiddleware)
  ));

export default store;