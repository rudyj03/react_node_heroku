import React, { Component } from 'react';
import logo from './logo.svg';
import darn from './darn.jpg';
import './style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={darn} className="App-Darn" alt="darn" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <h1> Shal, I have too much time on my hands. </h1>
        </p>
      </div>
    );
  }
}

export default App;
