import React from 'react';
import { render } from '@testing-library/react';
import Banner from '../banner.js';

it('renders a title and the reset information', () => {
  const { getByText, container } = render(<Banner />);

  const titleText = getByText(/Compete with your friends this week!/i);
  expect(titleText).toBeInTheDocument();

  const resetTextContainer = container.querySelector('.reset-text')
  const resetTimeContainer = container.querySelector('.reset-time')
  expect(resetTextContainer).toBeInTheDocument();
  expect(resetTimeContainer).toBeInTheDocument();
});
