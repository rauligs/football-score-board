import { render, screen } from '@testing-library/react';
import App from './App';

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
