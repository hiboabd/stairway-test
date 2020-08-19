import React from 'react';
import { render, act } from '@testing-library/react';
import Leaderboard from '../leaderboard';
const axios = require('axios')

jest.mock('axios')

beforeEach(() => {
  axios.get = jest.fn(() => Promise.resolve({
    data: {
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
    }
  }))
})


it('renders leaderboard page with banner', async () => {
  await act( async () => {
    const { getByText } = render(<Leaderboard />);
    const textElement = getByText(/Compete with your friends this week!/i);
    expect(textElement).toBeInTheDocument();
  });

});

it('returns leaderboard with two users', async () => {
  await act( async () => {
    const {findAllByTestId } = render(<Leaderboard/>);
    const items = await findAllByTestId(/users/)
    expect(items).toHaveLength(2)
  });
});
