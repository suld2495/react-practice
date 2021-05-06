import React from 'react';
import { render, screen, getDefaultNormalizer } from '@testing-library/react';
import Queries from './Queries';

test('queries practice', async () => {
    render(<Queries />);

    // "get"은 element가 없을 경우 throw error를 한다.
    // const result = screen.getByText('0');

    // "query"는 element가 없을 경우 throw error를 하지 않고 요소가 없으면 null을 반환한다.
    // const result = screen.queryByText('0');
    // console.log(result);

    // "find"는 element가 없을 경우 throw error를 한다.
    // "find"는 async / await를 사용할 수 있다. 
    // const result = await screen.findByText('0');
});

test('"get" queries parice', () => {
    render(<Queries />);

    // 이름 그대로 label 태그의 text 값으로 요소를 찾는다.
    // 이때 주의 할 점은 htmlFor까지 지정해주어야 한다.
    screen.getByLabelText('my name is Label');

    // 이것도 말그대로 placeholder의 text 값으로 요소를 찾는다.
    screen.getByPlaceholderText('i am placeholder');

    // 가장 일반적인 요소를 찾는 방법중의 하나이다.
    // 태그의 text 값으로 요소를 찾는다. 
    screen.getByText('1');

    // 폼요소의 값으로 요소를 찾는다.
    // 수정 페이지에서 미리 value를 지정해놓을때 이걸 사용해서 테스트 하면 될것 같다.
    screen.getByDisplayValue('패스워드');

    // "alt"는 대체 텍스트로 img나 input에 사용 가능하다.
    // "alt"는 사용자 경험을 좀더 좋게 만들어 준다.
    screen.getByAltText('alt를 사용합시다.');

    // 말그대로 title 속성의 값으로 요소를 찾는다.
    // "title"은 툴팁으로 표시가 되고, 요소에 대한 조언 정보를 나타낸다.
    screen.getByTitle('타이틀입니다.');

    // 여기서 id는 일반적으로 사용 되는 id 속성이 아니다.
    // data-testid 속성에 해당하는 값으로 요소를 찾는다.
    // 이건 사용자 측면에서 요소를 찾는 방법이 아니다.
    // (사실상 여기에서 제공하는 요소를 찾는 건 사용자 측면에 가깝다. - 사용자 눈에 보이거나 들리는 요소로 찾는것만 제공해준다. - 사실상 UI 테스트는 사용자 입장에서 테스트 해야한다는 것 같다.)
    // 만약 위와 같은 방법으로 요소를 찾기 어려운 경우에만 data-testid 속성을 부여해서 사용하라. 
    screen.getByTestId('user');
});

test('Text Match', () => {
    render(<Queries />);

    // 문자열
    screen.getByText('Hello World'); // text가 완전히 일치하여야 한다.
    screen.getByText('llo Worl', { exact: false }); // text의 일부만 일치해도 된다.
    screen.getByText('hello world', { exact: false }); // 대소문자를 구별하지 않는다.
    
    // 정규식
    screen.getByText(/World/); // text의 일부만 일치해도 된다.
    screen.getByText(/world/i); // 대소문자를 구별하지 않는다.  
    screen.getByText(/^Hello World$/) // text가 완전히 일치하여야 한다.

    // 함수
    screen.getByText((content, element) => {
        return element.tagName.toLowerCase() && content.startsWith('Hello')
    }); // 콜백함수를 파라미터로 넘겨서 테스트 가능
});

test('ect', () => {
    render(<Queries />);

    screen.getByText('  Hello      World  ', {
        normalizer: getDefaultNormalizer({ trim: false, collapseWhitespace: false })
    });
});

test('debug', () => {
    render(<Queries />);

    // document 전체를 debug
    screen.debug();

    // 특정 요소를 debug 
    // 단일 요소 뿐 아니라 다중 요소도 debug 가능
    screen.debug(screen.getAllByText(/e/i));

    // testing-playground에서 로그를 볼 수 있다.
    screen.logTestingPlaygroundURL();

    // 단일 요소에 대해서도 로그를 볼 수 있다.
    // debug처럼 다중 요소를 파라미터로 넘길 순 없다.
    screen.logTestingPlaygroundURL(screen.getByText(/hello/i));
});