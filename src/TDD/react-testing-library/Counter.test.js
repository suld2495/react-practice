import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

describe('<Counter />', () => {
    // test('matches snapshot', () => {
    //     const utils = render(<Counter />);
    //     expect(utils.container).toMatchSnapshot();
    // });

    it('has a number and two buttons', () => {
        render(<Counter />);

        const numberElement = screen.getByText(0);
        expect(numberElement).toBeInTheDocument();

        const plusElement = screen.getByText('+');
        expect(plusElement).toBeInTheDocument();

        const minusElement = screen.getByText('-');
        expect(minusElement).toBeInTheDocument();
    });

    it('increase', () => {
        render(<Counter />);

        const numberElement1 = screen.getByText(0);
        expect(numberElement1).toBeInTheDocument();

        const plusElement = screen.getByText('+');
        expect(plusElement).toBeInTheDocument();

        fireEvent.click(plusElement);

        const numberElement2 = screen.getByText(1);
        expect(numberElement2).toBeInTheDocument();
    });

    it('decrease', () => {
        render(<Counter />);

        const numberElement1 = screen.getByText(0);
        expect(numberElement1).toBeInTheDocument();

        const minusElement = screen.getByText('-');
        expect(minusElement).toBeInTheDocument();

        fireEvent.click(minusElement);

        const numberElement2 = screen.getByText(-1);
        expect(numberElement2).toBeInTheDocument();
    });
});