import { createStore, combineReducers } from 'redux';
import vanillaAction from './vanilla-module';

const rootReducer = combineReducers({
  vanillaAction
});

const store = createStore(rootReducer);

export default store;