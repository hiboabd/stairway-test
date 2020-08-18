import React from 'react';
import { render, act } from '@testing-library/react';
import Leaderboard from '../leaderboard';
const axios = require('axios')

jest.mock('axios')

beforeEach(() => {
  axios.get = jest.fn(() => Promise.resolve({
    profiles: [
      {
        username: 'user1',
        weeklyXP: 1000,
        isCurrentUser: false,
      },
      {
        username: 'user2',
        weeklyXP: 500,
        isCurrentUser: true,
      }
    ]
  }))
})

test('renders leaderboard page with title', async () => {
  await act( async () => {
    const { getByText } = render(<Leaderboard />);
    const textElement = getByText(/Compete with your friends this week!/i);
    expect(textElement).toBeInTheDocument();
  });

});

test('returns home page with two image posts', async () => {
  await act( async () => {
    const {getByText } = render(<Leaderboard />);
    const user1TextElement = await getByText(/user1/)
    const user2TextElement = await getByText(/user2/)
    expect(user1TextElement).toBeInTheDocument();
    expect(user2TextElement).toBeInTheDocument();
  });
});
