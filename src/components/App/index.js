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
        <AppChild name={this.props.match.params.name}/>
      </div>
    );
  }
}

class AppChild extends Component {
  render(){
    if(this.props.name){
      return(
        <p className="App-intro">
          <h1> {this.props.name}, you don't really suck, I have too much time on my hands. </h1>
        </p>
      );
    }
    else {
      return(
        <p className="App-intro">
          <h1> No one sucks, I just have too much time on my hands. </h1>
        </p>
      );
    }
  }
}

export default App;
