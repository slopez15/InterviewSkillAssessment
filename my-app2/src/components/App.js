import React, { Component } from 'react';
import { connect } from "react-redux";

@connect((store)=>{
  return {
    foo: 1,
  };
})
import Keys from "../Keys.key";
import '../css/App.css';
import logo from '../assets/logo.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <p><b>EventKey Interview Assesment</b> by Saul Lopez!</p>
        </header>
        <p className="App-intro"></p>
        <Event />
      </div>
    );
  }
}
//To get started, edit <code>src/App.js</code> and save to reload.

export default App;
