import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import authReducer from "./reducers/authReducer";
import ordersReducer from "./reducers/ordersReducer";
import { composeWithDevTools } from 'redux-devtools-extension';

let reducers = combineReducers({
    authorisationData: authReducer,
    orders: ordersReducer,
    form: formReducer,
});


const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(thunkMiddleware)
));

export default store;