import React, { Component } from 'react';

import '../css/App.css';
import logo from '../assets/logo.svg';
import Event from "./Event";
//creates a layout and adds other components onto the page.
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
export default App;
