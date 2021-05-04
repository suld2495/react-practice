import React from 'react';
import { render } from '@testing-library/react';
import Profile from './Profile';

describe('<Profile />', () => {

    /**
     * 스냅샷 테스트란 렌더링 된 결과가 이전에 렌더링한 결과와 일치하는지 여부를 확인하는 테스트
     * 코드를 저장하면 동일한 위치에 __snapshots__ 이라는 디렉토리에 Profile.test.js.snap이 생긴것을 확인 가능
     * 만약 스냅샷을 업데이트하고 싶다면 u를 입력하면 Profile.test.js.snap가 수정된걸 확인할 수 있다.
     */

    it('matches snapshot', () => {
        const utils = render(<Profile username="react" name="리액트" />);
        expect(utils.container).toMatchSnapshot();
    });

    it('shows the props correctly', () => {
        const utils = render(<Profile username="react" name="리액트"/>);
        utils.getByText('react');
        utils.getByText('리액트');
        utils.getByText(/리/);
    }); 
});