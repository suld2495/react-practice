import React, { useCallback, useState } from 'react'

const event = () => {
    const [count, setCount] = useState(0);
    const onIncrease = useCallback(
        () => {
            setCount(count + 1);
        },
        [count],
    );
    return (
        <div>
           <button aria-label="increase" onClick={onIncrease}>+</button> 
           <p>{count}</p>
           <label>
               username
               <input />
           </label>

           <label>
                picture
                <input type="file" data-testid="picture"/>
           </label>
        </div>
    )
}

export default event
