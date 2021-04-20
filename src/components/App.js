import React, {Component} from 'react';
import '../css/App.css';

import Header from './Header';
import Game from './Game';
import Footer from './Footer';


class App extends Component {
  constructor() {
    super();
    this.state = {
      appName: ''
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Game />
        <Footer />
        <div className="debug-tests">
          <p>{this.state.appName}</p>
        </div>
      </div>
    );
  }
}

export default App;
