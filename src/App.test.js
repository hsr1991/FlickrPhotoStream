import { render, waitFor, screen, } from '@testing-library/react';
import App from './App';
import React from 'react';

test('Loads page', () => {
  render(<App />);
  const linkElement = screen.getByText(/Waiting for data!/i);
  expect(linkElement).toBeInTheDocument();
});

test('Content renders', async () => {
  render(<App />);
  await waitFor(() => expect(screen.findByTestId('content')).toBeInTheDocument);
})

test('Image post renders', async () => {
  render(<App />);
  await waitFor(() => expect(screen.findByTestId('post')).toBeInTheDocument);
})

test('Flickr has returned the right json (with results including london))', async () => {
  render(<App />);
  await waitFor(() => expect(screen.findByText(/london/i)).toBeInTheDocument);
});

// describe("Home", () => {
//   it('Should render', async () => {
//       const component = render(<App/>);
//       await waitFor(() => component.getByText('Flickr Photo Stream'))
  // });

