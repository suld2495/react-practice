import React, { useCallback, useState } from 'react'

const AsyncMethod = () => {
    const [count, setCount] = useState(0);
    const onClick = useCallback(
        () => {
            setTimeout(() => {
                setCount(count + 1);
            }, 500);
        },
        [count]
    )
    return (
        <div>
            <button aria-label="Click Me" onClick={onClick}></button>
            {count === 1 && (
                <p>Clicked once</p>
            )}
        </div>
    )
}

export default AsyncMethod
