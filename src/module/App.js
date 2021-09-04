import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { increase } from './vanilla-module';
import { increase, fetchList } from './redux-actions-module';
// import { decrease, increase, fetchListAsync } from './typesafe-actions-module';

function App() {
  const dispatch = useDispatch();
  const count = useSelector(({ reduxActions }) => reduxActions.reducerA.count);
  const haha = useSelector(({ reduxActions }) => reduxActions.reducerA.haha);
  const reduxA = useSelector(({ reduxActions }) => reduxActions.reducerA);

  useEffect(() => {
    dispatch(increase(1));
  }, [dispatch])

  return (
    <>
      <div>카운트 : { haha }</div>      
    </>
  );
}

export default App;