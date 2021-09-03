import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { increase } from './vanilla-module';
import { decrease, increase } from './typesafe-actions-module';

function App() {
  const dispatch = useDispatch();
  const count = useSelector(({ typesafeActions }) => typesafeActions.count);

  useEffect(() => {
    dispatch(increase(12));
  }, [dispatch])

  return (
    <>
      <div>카운트 : { count }</div>      
    </>
  );
}

export default App;