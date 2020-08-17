import React from 'react';
import { render } from '@testing-library/react';
import Banner from './components/banner.js';

test('renders the title for the banner', () => {
  const { getByText } = render(<Banner />);
  const linkElement = getByText(/Compete with your friends this week!/i);
  expect(linkElement).toBeInTheDocument();
});
