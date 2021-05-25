import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';


test('renders Flickr Photo Stream Title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Waiting for data!/i);
  expect(linkElement).toBeInTheDocument();
});

// describe('Unit Tests for App', () => {
//   test('Test Rendering', () => {
//     const {getByTestId} = render(<App/>)
//     expect(getByTestId('content')).toBeInTheDocument()
//   })
// });

