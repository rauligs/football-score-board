import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./ScoreBoard', ()=> () => <div data-testid={"score-board"}/>)

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('displays app with expected title text', async () => {
  render(<App />);
  const titleElement = await screen.findByTestId("titleText");
  expect(titleElement.textContent).toBe("Football Score Board");
});

test('checks if the app has the child component Scoreboard', async () => {
  const {getByTestId} = render(<App />);
  expect(getByTestId("score-board")).toBeInTheDocument()
});

//next -> verify that app has child component ScoreBoard
// followed by ScoreBoard.test.js -> checking table specifics
// Run fails ...
// And make it pass by creating ScoreBoard.js with expected elements
