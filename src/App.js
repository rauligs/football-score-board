import logo from './logo.svg';
import './App.css';
import Scoreboard from './Scoreboard';

function App() {
  return (
    <div className="App">
      <span data-testid="titleText">Football Score Board</span>
      <Scoreboard />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
