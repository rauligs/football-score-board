import { render, screen } from '@testing-library/react';
import Scoreboard from './Scoreboard';

test('renders Scoreboard', () => {
    render(<Scoreboard />);
    const linkElement = screen.getByText('Scoreboard');
    expect(linkElement).toBeInTheDocument();
});