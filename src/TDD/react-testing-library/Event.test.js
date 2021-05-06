import React from 'react';
import { render, screen, fireEvent, getByLabelText, getByText } from '@testing-library/react';
import Event from './Event';

test('fire event', () => {
    render(<Event />);

    screen.getByText(0);

    // 첫번째 파라미터는 role,
    // option의 name은 aria-label 속성의 값으로 판단
    const increaseButton = screen.getByRole('button', { name: 'increase' });
    
    let max = 10;
    for (let i = 0; i < max; i++ ) {

        // fireEvent[eventName](element: Element | Node | Window | Document, option?: {})
        // 제공되는 event 메소드 및 event별 사용가능한 option은 아래 URL을 참고
        // https://github.com/testing-library/dom-testing-library/blob/main/src/event-map.js
        // click에서 button의 기본값은 0 => left click을 의미, button이 2이면 right click을 의미
        fireEvent.click(increaseButton);
        screen.getByText(i + 1)
    }

    // 이벤트에 element가 할당 되면 그 element는 프로퍼티의 target을 의미하게 된다.
    // target 프로퍼티를 사용하면 그 값이 해당 element에 할당된다. 
    fireEvent.change(screen.getByLabelText(/username/i), { target: { value: 'a' } });
    const usernameInput = screen.getByDisplayValue('a');
    expect(usernameInput.value).toEqual('a');

    // 이건 잘 모르겠다.
    fireEvent.change(screen.getByLabelText(/picture/i), {
        target: {
            files: [new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' })],
        },
    });
});

const Button = ({ onClick, children }) => (
    <button onClick={onClick}>{children}</button>
);

test('Jest의 Mock을 사용한 이벤트', () => {
    // 컴포넌트 내에 이벤트 핸들러를 구현할 수 도 있지만 외부에서
    // 핸들러를 구현하는 경우에는 이렇게 jest의 mock을 이용하여 테스트 가능 
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click Me!</Button>);
    fireEvent.click(screen.getByText(/click me/i));
    expect(handleClick).toBeCalledTimes(1);
});