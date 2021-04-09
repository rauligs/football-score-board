import { render, screen } from '@testing-library/react';
import ScoreBoard from './ScoreBoard';

test('renders learn react link', () => {
  render(<ScoreBoard />);
});

test('displays app with expected title text', async () => {
  render(<ScoreBoard />);
  const scoreBoardElement = await screen.findByTestId("scoreBoardApp");
  expect(scoreBoardElement).toBeVisible()
});

//next -> verify that app has child component ScoreBoard
// followed by ScoreBoard.test.js -> checking table specifics
// Run fails ...
// And make it pass by creating ScoreBoard.js with expected elements
