import { composeWithDevTools } from '@redux-devtools/extension';
import { combineReducers, createStore } from 'redux';
import { costumerReducer, userReducer } from './reducers/index';

const rootReducer = combineReducers({ userReducer, costumerReducer });
const store = createStore(rootReducer, composeWithDevTools());
export default store;
