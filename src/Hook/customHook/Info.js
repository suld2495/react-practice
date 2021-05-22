import React from 'react'
import useInputs from './useInputs';

const Info = () => {
    const [state, onChange] = useInputs({
        name: '',
        nickname: ''
    });
    const { name, nickname } = state;

    return (
        <div>
            <input name="name" value={name} onChange={onChange} />
            <input name="nickname" value={nickname} onChange={onChange} />
            <p>나의 이름은 <b>{name}</b>입니다.</p>
            <p>나의 별명은 <b>{nickname}</b>입니다.</p>
        </div>
    )
}

export default Info

