import React, { useReducer } from 'react'

const reducer = (state, action) => {
    switch(action.type) {
        case 'INCREASE':
            return {
                value: state.value + 1
            }
        case 'DECREASE':
            return {
                value: state.value -1
            }
        default:
            return state;
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, { value: 0 });
    const increase = () => {
        dispatch({
            type: 'INCREASE'
        })
    }
    const decrease = () => {
        dispatch({
            type: 'DECREASE'
        })
    }
    return (
        <div>
            {state.value}
            <button onClick={increase}>+1</button>
            <button onClick={decrease}>-1</button>
        </div>
    )
}

export default Counter
