import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import EquationInput from './EquationInput';

describe('render equation input', () => {
  test('it should mount', () => {
    render(<EquationInput name="test" />);
    const equationInput = screen.getByTestId('EquationInput_test');
    expect(equationInput).toBeInTheDocument();
  });
});
