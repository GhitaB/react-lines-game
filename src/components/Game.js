import React from 'react';


function LineItem({value}) {
  const [isActive, setActive] = React.useState(false);

  const changeActive = () => {
    setActive(!isActive);
  }

  return (<span onClick={changeActive}>{isActive ? "1" : "0"}</span>);
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

  const changePlayer = () => {
    var player1Play = !players.player1.isPlaying;
    var player2Play = !players.player2.isPlaying;

    setPlayers({
      player1: {name: 'Player 1', isPlaying: player1Play},
      player2: {name: 'Player 2', isPlaying: player2Play}
    });
  }

  var linesListing = lines.map(function(line, index) {
    return (<li key={index}><LinesRow items={line} /></li>);
  });

  return (
    <div className="game-board-container">
      <div id="game-board">
        <p>Game board</p>

        <ul>{linesListing}</ul>

        <button onClick={changePlayer} className="btn btn-primary">Play</button>
        <h4>
          <span>{players.player1.name}</span>:
          <span> {players.player1.isPlaying ? "is playing" : ""}</span>
        </h4>
        <h4>
          <span>{players.player2.name}</span>:
          <span> {players.player2.isPlaying ? "is playing" : ""}</span>
        </h4>
      </div>
    </div>
  );
}

export default Game;
