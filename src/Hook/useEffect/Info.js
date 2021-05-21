import React, { useEffect, useState } from 'react'

const Info = () => {
    let a = {};
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
    const onChangeName = e => setName(e.target.value);
    const onChangeNickName = e => setNickname(e.target.value);

    // useEffect는 DOM이 모두 그려진 이후에 실행이 된다.
    
    // 마운트 될때 1번 호출됨
    useEffect(() => {
        console.log('처음 1번 실행됨');

        // 언마운트 될때 호출됨
        return () => {
            console.log('언제 호출 되니?');
        }
    }, []);

    useEffect(() => {
        console.log('렌더링 될때마다 실행됨');
    });

    // 특정 값이 업데이트될때만 실행
    useEffect(() => {
        console.log('nickname이 변경될때마다 실행됨');
    }, [nickname]);

    // 해당 배열의 상태가 변할때 리렌더링 되기 직전에 호출됨
    useEffect(() => {
        return () => {
            console.log('cleanup');
        }
    }, [nickname]);

    useEffect(() => {
        console.log('name1은 ' + name);
        return () => {
            console.log('name은 ' + name);
        }
    }, [nickname, name]);

    return (
        <div>
            <input value={name} onChange={onChangeName} />
            <input value={nickname} onChange={onChangeNickName} />
            <button onClick={() => a['a'] = 2}>안녕?</button>
            <p>나의 이름은 <b>{name}</b>입니다.</p>
            <p>나의 별명은 <b>{nickname}</b>입니다.</p>
        </div>
    )
}

export default Info
