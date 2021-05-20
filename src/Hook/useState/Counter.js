import React, { useState } from 'react'

const Counter = () => {
    // const initialState = someExpensiveComputation();

    function someExpensiveComputation() {
        console.log(1);
        return 0;
    }
 
    // const [value, setValue] = useState(initialState);
    const [value, setValue] = useState(() => {
        return someExpensiveComputation();
    });
    const [name, setName] = useState('');

    return (
        <div>
            <input value={name} onChange={e => setName(e.target.value)}/>
            <p>나의 이름은 {name} 입니다.</p>
            <p>
                현재 카운터 값은 <b>{value}</b>입니다.
            </p>        
            <button onClick={() => setValue(value + 1)}>+1</button>
            <button onClick={() => setValue(value - 1)}>-1</button>
        </div>
    )
}

export default Counter
