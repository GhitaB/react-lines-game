import React, {Component} from 'react';


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
        [0, 0, 0, 0, 0, 0]
      ]
    }
  }

  render() {
    var lines = this.state.lines;
    var linesListing = lines.map(function(line, index) {
      return (<li key={index}><LinesRow items={line} /></li>);
    });

    return (
      <div className="game-board-container">
        <div id="game-board">
          <p>Game board</p>

          <ul>{linesListing}</ul>
        </div>
      </div>
    );
  }
}

export default Game;
