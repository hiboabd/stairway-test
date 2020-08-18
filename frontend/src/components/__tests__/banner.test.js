import React from 'react';
import { render } from '@testing-library/react';
import Banner from '../banner.js';

test('renders the title for the banner', () => {
  const { getByText } = render(<Banner />);
  const textElement = getByText(/Compete with your friends this week!/i);
  expect(textElement).toBeInTheDocument();
});


test('renders the reset information', () => {
  const { container } = render(<Banner />);
  const container1 = container.querySelector('.reset-text')
  const container2 = container.querySelector('.reset-time')
  expect(container1).toBeInTheDocument();
  expect(container2).toBeInTheDocument();
});
