import React from 'react';


const LineItem = ({value, rowIndex, columnIndex}) => {
  /* COMPONENT: A line item
   * There are multiple line items in a game row.
   * A line item is initialized as simple vertical line: |
   * A player can mark it, then it will be: +
   */
  const [isMarked, setMarked] = React.useState(false);

  const markLine = () => {
    setMarked(!isMarked);
    console.log("Marked: ", rowIndex, "-", columnIndex);
    debugger;
  }

  return (<span onClick={markLine}>{isMarked ? "+" : "|"}</span>);
}

const LinesRow = ({items, rowIndex}) => {
  /* COMPONENT: A lines row
   * Game board has multiple lines rows.
   * A lines row contains line items (marked or not).
   * Examples: ||||| or ||+++| or ++++
   */
  return items.map((item, index) => (
    <span key={index}>
      <LineItem value={item} rowIndex={rowIndex} columnIndex={index} />
    </span>
  ));
}

const Game = () => {
  /* COMPONENT: The Game board and its behavior
   * Players can mark line items in the same row.
   * The Game is finished when all the lines are marked.
   * The player who has the final move loses the game.
   */
  const [lines, setLines] = React.useState([
    [0],
    [0, 0],
    [0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0]
  ]);

  const saveMarkedLine = (rowIndex, columnIndex) => {
    var copyLines = lines;
    copyLines[rowIndex][columnIndex] = 1;
    setLines(copyLines);
  }

  const [players, setPlayers] = React.useState({
    player1: {name: 'Player 1', isPlaying: true},
    player2: {name: 'Player 2', isPlaying: false}
  });

  const [isGameOver, setIsGameOver] = React.useState(false);

  const finishGame = () => {
    setIsGameOver(true);
  }

  const checkIsGameOver = () => {
    var isOver = true;
    for (var i = 0; i < lines.length; i++) {
      for (var j = 0; j < lines[i].length; j++) {
        if (lines[i][j] === 0) {
          isOver = false;
        }
      }
    }
    return isOver;
  }

  const sendMove = () => {
    var player1Play = !players.player1.isPlaying;
    var player2Play = !players.player2.isPlaying;

    setPlayers({
      player1: {name: 'Player 1', isPlaying: player1Play},
      player2: {name: 'Player 2', isPlaying: player2Play}
    });

    if (checkIsGameOver() === true) {
      finishGame();
    }

    console.log(lines);
  }

  var linesListing = lines.map(function(line, index) {
    return (<li key={index}><LinesRow items={line} rowIndex={index} /></li>);
  });

  return (
    <div className="game-board-container">
      <div id="game-board">

        <ul>{linesListing}</ul>

        <button onClick={sendMove} className="btn btn-primary">
          {isGameOver ? "Game Over" : "Continue"}
        </button>

        <br />
        <br />
        <p>
          <span>{players.player1.name}</span>
          <span> {players.player1.isPlaying ? "is playing" : ""}</span>
        </p>
        <p>
          <span>{players.player2.name}</span>
          <span> {players.player2.isPlaying ? "is playing" : ""}</span>
        </p>
      </div>
    </div>
  );
}

export default Game;
