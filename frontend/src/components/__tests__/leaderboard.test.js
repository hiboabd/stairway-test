import React from 'react';
import { render, act } from '@testing-library/react';
import Leaderboard from '../leaderboard';
const axios = require('axios')

jest.mock('axios')

beforeAll( async () => {
  axios.get = jest.fn(() => Promise.resolve({
    data: {
      profiles: [
        {
          username: 'user1',
          weeklyXP: 500,
          isCurrentUser: false,
        },
        {
          username: 'user2',
          weeklyXP: 1000,
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

it('returns two users in order of XP', async () => {
  await act( async () => {
    const correctOrder = ["1000", "500"]
    const incorrectOrder = ["500", "1000"]

    const { findAllByTestId } = render(<Leaderboard />)
    const renderedNames = await findAllByTestId(/users/)
    expect(renderedNames).toHaveLength(2)
    renderedNames.forEach((nameNode, index) => {
      expect(nameNode.textContent).toMatch(correctOrder[index])
      expect(nameNode.textContent).not.toMatch(incorrectOrder[index])
    })
  });
});

it('returns different color background for a logged in user', async () => {
  await act( async () => {
    const { findByText } = render(<Leaderboard />)
    const renderedLoggedInUser = await findByText(/user2/)
    const renderedOtherUser = await findByText(/user1/)

    expect(renderedLoggedInUser).toBeInTheDocument();
    expect(renderedLoggedInUser.parentElement).toHaveStyle(`background: #F2F5FC`)
    expect(renderedLoggedInUser.parentElement).not.toHaveStyle(`background: #FFFFFF`)

    expect(renderedOtherUser).toBeInTheDocument();
    expect(renderedOtherUser.parentElement).toHaveStyle(`background: #FFFFFF`)
    expect(renderedOtherUser.parentElement).not.toHaveStyle(`background: #F2F5FC`)
  });
});
