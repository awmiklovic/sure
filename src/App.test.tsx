import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import mockQuote from './quote.mock';
import App from './App';

const mockPostQuote = jest.fn();
const mockUpdateQuote = jest.fn();

function mockApiHAndler() {
  return {
    postQuote: mockPostQuote.mockResolvedValue(mockQuote),
    updateQuote: mockUpdateQuote.mockResolvedValue(mockQuote),
  };
}

jest.mock('./ApiHandler', () => mockApiHAndler);

test('Renders Rating Information Screen', () => {
  render(<App />);
  const title = screen.getByText(/Rating Information/i);
  expect(title).toBeInTheDocument();
});

test('Get Quote calls API', async () => {
  render(<App />);
  const button = screen.getByText(/Get Quote/i);
  userEvent.click(button);

  await waitFor(() => {
    expect(mockPostQuote.call.length).toEqual(1);
  });
});

test('Get Quote redirects to Overview', async () => {
  render(<App />);

  const button = screen.getByText(/Get Quote/i);
  userEvent.click(button);

  await waitFor(() => {
    expect(screen.getByText(/Quote Overview/i)).toBeInTheDocument();
  });
});

test('Missing required field shows error', async () => {
  render(<App />);

  const mockQuoteWithError = {
    ...mockQuote,
    errors: {
      first_name: 'Missing Field',
    },
  };

  mockPostQuote.mockResolvedValue(mockQuoteWithError);
  const button = screen.getByText(/Get Quote/i);
  userEvent.click(button);

  await waitFor(() => {
    expect(screen.getByText(/Missing Field/i)).toBeInTheDocument();
  });
});
