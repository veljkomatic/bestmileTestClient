import React, { Component } from 'react';

import './App.css';
import { subscribeToTimer } from './api';

class App extends Component {

  constructor(props) {
    super(props);

    subscribeToTimer();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
      </div>
    );
  }
}

export default App;
