import React from 'react';


function LineItem({value}) {
  const [isActive, setActive] = React.useState(false);

  const changeActive = () => {
    setActive(!isActive);
  }

  return (<span onClick={changeActive}>{isActive ? "+" : "|"}</span>);
}

function LinesRow({items}) {
  return items.map((item, index) => (
    <span key={index}>
      <LineItem value={item}/>
    </span>
  ));
}

function Game() {
  const [lines, setLines] = React.useState([
    [0],
    [0, 0],
    [0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0]
  ]);

  const [players, setPlayers] = React.useState({
    player1: {name: 'Player 1', isPlaying: true},
    player2: {name: 'Player 2', isPlaying: false}
  });

  const [isGameOver, setIsGameOver] = React.useState(false);

  const finishGame = () => {
    setIsGameOver(true);
    console.log("asdasd");
  }

  const changePlayer = () => {
    var player1Play = !players.player1.isPlaying;
    var player2Play = !players.player2.isPlaying;

    setPlayers({
      player1: {name: 'Player 1', isPlaying: player1Play},
      player2: {name: 'Player 2', isPlaying: player2Play}
    });

    finishGame();
  }

  var linesListing = lines.map(function(line, index) {
    return (<li key={index}><LinesRow items={line} /></li>);
  });

  return (
    <div className="game-board-container">
      <div id="game-board">

        <ul>{linesListing}</ul>

        <button onClick={changePlayer} className="btn btn-primary">
          {isGameOver ? "Game Over" : "Continue"}
        </button>

        <br />
        <br />
        <p>
          <span>{players.player1.name}</span>:
          <span> {players.player1.isPlaying ? "is playing" : ""}</span>
        </p>
        <p>
          <span>{players.player2.name}</span>:
          <span> {players.player2.isPlaying ? "is playing" : ""}</span>
        </p>
      </div>
    </div>
  );
}

export default Game;
