import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('smoke test - renders main screen', () => {
  render(<App />);
  const title = screen.getByText(/Rating Information/i);
  expect(title).toBeInTheDocument();
});
