import React, { useCallback, useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    const onIncrease = useCallback(
        () => {
            setCount(count + 1);     
        }, 
        [count],
    );
    const onDecrease = useCallback(
        () => {
            setCount(count - 1);
        },
        [count]
    )

    return (
        <div>
            <p>{count}</p>
            <div className="buttons">
                <button onClick={onIncrease}>+</button>
                <button onClick={onDecrease}>-</button>
            </div>
        </div>
    )
}

export default Counter
