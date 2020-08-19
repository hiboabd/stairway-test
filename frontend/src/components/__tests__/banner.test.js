import React from 'react';
import { render } from '@testing-library/react';
import Banner from '../banner.js';

it('renders a title and the reset information', () => {
  const { getByText, container } = render(<Banner />);

  const textElement = getByText(/Compete with your friends this week!/i);
  expect(textElement).toBeInTheDocument();

  const container1 = container.querySelector('.reset-text')
  const container2 = container.querySelector('.reset-time')
  expect(container1).toBeInTheDocument();
  expect(container2).toBeInTheDocument();
});
