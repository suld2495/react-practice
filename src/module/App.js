import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increase } from './vanilla-module';

function App() {
  const dispatch = useDispatch();
  const count = useSelector(({ vanillaAction }) => vanillaAction.count);

  useEffect(() => {
    dispatch(increase(2));
  }, [dispatch])

  return (
    <>
      <div>카운트 : { count }</div>      
    </>
  );
}

export default App;