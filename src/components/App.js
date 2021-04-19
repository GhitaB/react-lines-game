import '../css/App.css';

import Header from './Header';
import Footer from './Footer';


function GameBoard() {
  return (
    <div className="game-board-container">
      <div id="game-board">Game board</div>
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
