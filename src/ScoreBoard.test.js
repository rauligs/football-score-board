import { render, screen } from '@testing-library/react';
import ScoreBoard from './ScoreBoard';

test('renders learn react link', () => {
  render(<ScoreBoard />);
});

//next -> verify that app has child component ScoreBoard
// followed by ScoreBoard.test.js -> checking table specifics
// Run fails ...
// And make it pass by creating ScoreBoard.js with expected elements
