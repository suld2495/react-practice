import { createStore, combineReducers } from 'redux';
// import vanillaAction from './vanilla-module';
// import reduxActions from './redux-actions-module';
import typesafeActions from './typesafe-actions-module';

const rootReducer = combineReducers({
  typesafeActions
});

const store = createStore(rootReducer);

export default store;