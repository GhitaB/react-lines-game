import React, {Component} from 'react';

class Game extends Component {
  constructor() {
    super();
    this.state = {
      lines: [
        [0],
        [0, 0],
        [0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0]
      ]
    }
  }

  render() {
    return (
      <div className="game-board-container">
        <div id="game-board">
          <p>Game board</p>
          <div>{this.state.lines}</div>
        </div>
      </div>
    );
  }
}

export default Game;
