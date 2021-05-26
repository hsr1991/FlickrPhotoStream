import { render, screen, } from '@testing-library/react';
import App from './App';
import React from 'react';

test('Loads page', () => {
  render(<App />);
  const linkElement = screen.getByText(/Waiting for data!/i);
  expect(linkElement).toBeInTheDocument();
});


