import { render, screen } from '@testing-library/react';
import Scoreboard from './Scoreboard';

test('renders Scoreboard', () => {
    render(<Scoreboard />);
    const linkElement = screen.getByText('Scoreboard');
    expect(linkElement).toBeInTheDocument();
});

test('has elements in the scoreboard - such as teamname and score', () => {
    render(<Scoreboard />);
    const linkElement = screen.getByTestId('scoreboardContainer');
    expect(linkElement).toBeInTheDocument();
});

test('displays scoreboard with team name container ', () => {
    render(<Scoreboard />);
    const teamElement = await screen.getByTestId('homeTeam');
    expect(teamElement.textContent).toBe("Mexico");
});

test('displays score within scoreboard', () => {
    render(<Scoreboard />);
    const scoreElement = await screen.getByTestId('score');
    expect(teamElement.textContent).toBe('0 - 0');
});