import React, { Component } from 'react';
import logo from '../../assets/logo.svg';
import '../../css/App.css';
//import { Col } from "react-bootstrap";

//Components
import Event from "./Event.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      //var: "value"
    };//state
  }//constructor
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2><b>EventKey Interview Assesment</b> by Saul Lopez!</h2>
        </div>
        <p className="App-intro"></p>
        <Event />
      </div>
    );
  }
}

export default App;
