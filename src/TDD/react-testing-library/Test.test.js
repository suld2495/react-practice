import React, { useState } from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

const Input = () => {
  const [value, setValue] = useState('');
  
  return (
    <label>
      input
      <input value={value} onChange={e => setValue(e.target.value)} />
    </label>
  )
}

test('input test', () => {
  render(<Input />);
   
  fireEvent.change(screen.getByLabelText('input'), { target: { value: 'a' } });
  const input = screen.getByDisplayValue('a');
  expect(input.value).toEqual('a');
});