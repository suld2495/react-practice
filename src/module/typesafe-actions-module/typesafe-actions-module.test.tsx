import { expectSaga } from 'redux-saga-test-plan';
import * as loginActions from '../typesafe-actions-module';

it('비동기 테스트', () => {
  return expectSaga(loginActions.fetchSaga)
    .dispatch(loginActions.fetchListAsync.request(1))
    .put(loginActions.fetchListAsync.success(1))
    .run();
});