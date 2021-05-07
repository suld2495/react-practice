import React, { useCallback, useReducer, useState } from 'react'
import axios from 'axios'

const initialState = {
    error: null,
    greeting: null,
};

function greetingReducer(state, action) {
    switch (action.type) {
        case 'SUCCESS': {
            return {
                error: null,
                greeting: action.greeting,
            }
        }
        case 'ERROR': {
            return {
                error: action.error,
                greeting: null,
            }
        }
    }
}

const ReactTestingExample = ({ url }) => {
    const [disabled, setDisabled] = useState(false);
    const [{ error, greeting }, dispatch] = useReducer(
        greetingReducer,
        initialState
    )
    const fetchGreeting = async (url) => {
        axios
            .get(url)
            .then(response => {
                const { data } = response;
                const { greeting } = data;
                dispatch({ type: 'SUCCESS', greeting });
                setDisabled(true);
            })
            .catch(error => {
                dispatch({ type: 'ERROR', error })
            })
    }
    const onClick = useCallback(
        () => {
            fetchGreeting(url);
        }
    )
    return (
        <div>
            <button onClick={onClick} disabled={disabled}>Load Greeting</button>
            {greeting && <h1>{greeting}</h1>}
            {error && <p role="alert">Oops, failed to fetch!</p>}
        </div>
    )
}

export default ReactTestingExample
