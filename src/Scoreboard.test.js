import { render, screen } from '@testing-library/react';
import Scoreboard from './Scoreboard';

test('renders Scoreboard', () => {
    render(<Scoreboard />);
    const linkElement = screen.getByText('Scoreboard');
    expect(linkElement).toBeInTheDocument();
});

test('has elements in the scoreboard - such as teamname and score', async () => {
    render(<Scoreboard />);
    const linkElement = await screen.findByTestId('scoreboardApp');
    expect(linkElement).toBeInTheDocument();
});

test('displays scoreboard with team name container', async () => {
    render(<Scoreboard />);
    const teamElement = await screen.findByTestId('homeTeam');
    expect(teamElement.textContent).toBe("Mexico");
});

test('displays score within scoreboard', async () => {
    render(<Scoreboard />);
    const scoreElement = await screen.findByTestId('score');
    expect(scoreElement.textContent).toBe('0 - 0');
});