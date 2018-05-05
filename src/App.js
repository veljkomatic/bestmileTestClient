import React, { Component } from 'react';

import './App.css';
import { subscribeToTimer } from './api';
import Map from './Map';
class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      missions: []
    }
  }

  componentDidMount() {
    subscribeToTimer(((error, res) => {
      this.setState({
        missions: res
      })
    }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Map missions={this.state.missions}/>
      </div>
    );
  }
}

export default App;
