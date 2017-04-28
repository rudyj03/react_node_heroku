import React, { Component } from 'react';
import logo from './logo.svg';
import darn from './darn.jpg';
import './style.css';

class App extends Component {
  render() {
    return (
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>,
      <div className="App">
        <div className="jumbotron">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={darn} className="App-Darn" alt="darn" />
          <h2>Hello</h2>
        </div>
        <p className="App-intro">
          <h1> Shal, I have too much time on my hands. </h1>
        </p>
      </div>
    );
  }
}

export default App;
