import { useState } from 'react';
import Counter from './Hook/useReducer/Counter';
import Info from './Hook/useReducer/Info';
import IterationSample from './TIP/반복처리/IterationSample';

function App() {  
  const [visible, setVisible] = useState(true);
  return (
    <div className="App">
      <button onClick={() => setVisible(!visible)}>버튼</button>
      {visible && <Info />}
    </div>
  );
}

export default App;
