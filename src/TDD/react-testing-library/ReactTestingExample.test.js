import React from 'react';

import { rest } from 'msw';
import { setupServer } from 'msw/node';

import { render, fireEvent, screen, waitFor } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';
import ReactTestingExample from './ReactTestingExample';

const url = "/greeting";
const greetingText = 'hello there';
const server = setupServer(
    rest.get(url, (req, res, ctx) => {
        return res(ctx.json({ greeting: greetingText }));
    })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('loads and displays greeting', async () => {
    render(<ReactTestingExample url={url}/>);

    fireEvent.click(screen.getByText('Load Greeting'));

    await waitFor(() => screen.getByRole('heading'));

    expect(screen.getByRole('heading')).toHaveTextContent(greetingText);
    expect(screen.getByRole('button')).toHaveAttribute('disabled');
});

test('handlers server error', async () => {
    server.use(
        rest.get(url, (req, res, ctx) => {
            return res(ctx.status(500));
        })
    )

    render(<ReactTestingExample url={url} />);

    fireEvent.click(screen.getByRole('button'));

    await waitFor(() => screen.getByRole('alert'));

    expect(screen.getByRole('alert')).toHaveTextContent('Oops, failed to fetch!');
    expect(screen.getByRole('button')).not.toHaveAttribute('disabled');
});