import { composeWithDevTools } from '@redux-devtools/extension';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import redditReducer from './reducers';

const rootReducer = combineReducers({ redditReducer });

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
