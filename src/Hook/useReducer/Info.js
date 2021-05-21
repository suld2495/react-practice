import React, { useReducer } from 'react'

const reducer = (state, action) => {
    return {
        ...state,
        [action.name]: action.value
    }
}

const Info = () => {
    const [state, dispatch] = useReducer(reducer, {
        name: '',
        nickname: ''
    });
    const onChange = e => {
        dispatch(e.target)
    }
    return (
        <div>
            <input name="name" value={state.name} onChange={onChange} />
            <input name="nickname" value={state.nickname} onChange={onChange} />
            <p>나의 이름은 {state.name}</p>
            <p>나의 닉네임은은 {state.nickname}</p>
        </div>
    )
}

export default Info
