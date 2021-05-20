import { useState } from 'react';
import CounterAttack from './Hook/useEffect/CounterAttack';
import Info from './Hook/useEffect/Info';
import Counter from './Hook/useState/Counter';
import IterationSample from './TIP/반복처리/IterationSample';

function App() {  
  const [visible, setVisible] = useState(true);
  return (
    <div className="App">
      <button onClick={() => setVisible(!visible)}>버튼</button>
      {visible && <CounterAttack />}
    </div>
  );
}

export default App;
