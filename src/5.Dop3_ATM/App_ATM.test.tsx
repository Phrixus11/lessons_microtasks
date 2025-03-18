import React from 'react';
import { render, screen } from '@testing-library/react';
import App_ATM from "./App_ATM.tsx";


test('renders learn react link', () => {
  render(<App_ATM />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
