const endedMatches = [
    { home: 'Mexico', away: 'Canada', result: { home: 0, away: 5 } },
    { home: 'Spain', away: 'Brazil', result: { home: 10, away: 2 } },
    { home: 'Germany', away: 'France', result: { home: 2, away: 2 } },
    { home: 'Uruguay', away: 'Italy', result: { home: 6, away: 6 } },
    { home: 'Argentina', away: 'Australia', result: { home: 3, away: 1 } }
];

function Scoreboard() {
    const { home: homeTeam, away: awayTeam } = endedMatches[0];
    return (
        <div className="Scoreboard" data-testid="scoreboardApp">
            <h1 data-testid="title">Scoreboard</h1>
            <div data-testid="liveGame">
                <span data-testid="homeTeam" >Mexico</span>
                <span data-testid="score" >0 - 0</span>
                <span data-testid="awayTeam" >Canada</span>
            </div>
            <div data-testid="Summary">
                {endedMatches.sort((a, b) => (b.result.home + b.result.away) - (a.result.home + a.result.away))
                    .map((match, i) => <div key={`match-${i + 1}`} data-testid="Match">{`${match.home} ${match.result.home} - ${match.away} ${match.result.away}`}</div>)}
            </div>
        </div>
    );
}

export default Scoreboard;
