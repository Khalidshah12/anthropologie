import { legacy_createStore, applyMiddleware, combineReducers } from "redux"
import thunk from 'redux-thunk'
import { reducer as AppReducer } from './AppReducer/reducer'
import { reducer as AuthReducer } from './AuthReducer/reducer'

const rootReducer = combineReducers({ AppReducer, AuthReducer });

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
