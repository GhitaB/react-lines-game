import './App.css';

function Header() {
  return (
    <div className="header">
      <h1>Lines Game</h1>
      <h3>A game with lines</h3>
    </div>
  );
}

function GameBoard() {
  return (
    <div className="game-board-container">
      <div id="game-board">Game board</div>
    </div>
  );
}

function Footer() {
  return (
    <div className="footer">
      <p>You are smart.</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Header />
      <GameBoard />
      <Footer />
    </div>
  );
}

export default App;
