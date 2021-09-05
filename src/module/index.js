import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import vanillaAction from './vanilla-module';
import reduxActions, { reduxActionsSaga } from './redux-actions-module';
import typesafeActions, { typesafeActionsSaga } from './typesafe-actions-module';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  typesafeActions
});

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

function* rootSaga() {
  yield all([typesafeActionsSaga()]);
}

sagaMiddleware.run(rootSaga);

export default store;