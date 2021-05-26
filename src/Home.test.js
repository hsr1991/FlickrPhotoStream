import { render, waitFor, screen, } from '@testing-library/react';
import {Home} from './Home';
import React from 'react';

test('Content renders', async () => {
    render(<Home />);
    await waitFor(() => expect(screen.findByTestId('content')).toBeInTheDocument);
})

test('Image post renders', async () => {
    render(<Home />);
    await waitFor(() => expect(screen.findByTestId('post')).toBeInTheDocument);
});