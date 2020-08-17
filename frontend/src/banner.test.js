import React from 'react';
import { render } from '@testing-library/react';
import Banner from './components/banner.js';

test('renders the title for the banner', () => {
  const { getByText } = render(<Banner />);
  const textElement = getByText(/Compete with your friends this week!/i);
  expect(textElement).toBeInTheDocument();
});


test('renders the time left before leaderboard reset', () => {
  const { getByText } = render(<Banner />);
  const textElement = getByText(/Resets in: 4 days/i);
  expect(textElement).toBeInTheDocument();
});
