import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { increase } from './vanilla-module';
// import { increase, fetchList } from './redux-actions-module';
import { decrease, increase, fetchListAsync } from './typesafe-actions-module';

function App() {
  const dispatch = useDispatch();
  const count = useSelector(({ typesafeActions }) => typesafeActions.count);
  const haha = useSelector(({ typesafeActions }) => typesafeActions.haha);
  const reduxA = useSelector(({ typesafeActions }) => typesafeActions);

  useEffect(() => {
    dispatch(increase({dasffasdd: 1}));
  }, [dispatch])

  return (
    <>
      <div>카운트 : { count }</div>      
    </>
  );
}

export default App;