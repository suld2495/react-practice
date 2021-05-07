import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import AsyncMethod from './AsyncMethod';

// 이벤트, 유저액션, 타임아웃 등에의해서 요소가 나타나거나 사라지를것을 기다릴때
// 유용하게 사용가능하다.
test('Async Methods', async () => {
    render(<AsyncMethod />);

    const button = screen.getByRole('button', { name: 'Click Me' });
    fireEvent.click(button);

    // getByText로 했을 경우에는 테스트에 실패했으나 find로 하니 성공했다.
    // await screen.getByText('Clicked once');
    // await screen.findByText('Clicked once');
    // 특정 시간동안(timeout) interval 시간마다 콜백을 호출하는 듯하다.
    await waitFor(() => screen.getByText('Clicked once'), { timeout: 4000 });
});