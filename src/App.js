import { useState } from 'react';
import Info from './Hook/customHook/Info';
import Counter from './Hook/useCallback/Counter';
import Average from './Hook/useRef/Average';
import IterationSample from './TIP/반복처리/IterationSample';

function App() {  
  const [visible, setVisible] = useState(true);
  return (
    <div className="App">
      <button onClick={() => setVisible(!visible)}>버튼</button>
      {visible && <Counter />}
    </div>
  );
}

export default App;
