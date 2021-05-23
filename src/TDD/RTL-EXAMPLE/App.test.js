import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import userEvent from '@testing-library/user-event';
import App from './App';
import mockResponse from './__mocks__/subreddit-reactjs-response.json';
import fetchMock from "jest-fetch-mock";

fetchMock.enableMocks();

const setup = () => (
    render(
        <MemoryRouter>
            <App />
        </MemoryRouter>
    )
)

describe('Header', () => {
    test.each`
        name               | subject
        ${/how it works/i} | ${"How it works"}
        ${/about/i}        | ${"About"}
    `('"$subject link points" to the correct page', ({ name }) => {
        setup();

        const link = screen.getByRole('link', { name });
        userEvent.click(link);

        expect(screen.getByRole('heading', { name })).toBeInTheDocument();
    });

    test('"LOGO" link points to the correct page', () => {
        setup();

        const link = screen.getByRole('link', { name: /logo.svg/i });
        userEvent.click(link);

        expect(screen.getByRole('heading', { name: /find the best time for a subreddit/i })).toBeInTheDocument();
    });
});

describe('Subreddit form', () => {
    test('loads posts that are rendered on the page', async () => {
        fetch.once(JSON.stringify(mockResponse));
        
        setup();

        const subredditInput = screen.getByLabelText('r /');
        userEvent.type(subredditInput, 'reactjs');

        const submitButton = screen.getByRole('button', { name: /search/i });
        userEvent.click(submitButton);

        expect(screen.getByText(/is loading/i)).toBeInTheDocument();

        expect(await screen.findByText(/number of top posts: 25/i)).toBeInTheDocument();
        expect(fetch).toHaveBeenCalledWith('https://www.reddit.com/r/reactjs/top.json');
    });
});