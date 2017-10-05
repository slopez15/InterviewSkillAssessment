import Parse from "parse";
import React, { Component } from 'react';
//import { Col } from "react-bootstrap";
//import { connect } from "react-redux";

import logo from '../../assets/logo.svg';
import '../../css/App.css';
import Keys from "../other/Keys.key.js"; //better to import where needed. Don't place where need to pass to other Components.

//Components
import Event from "./Event.js";

// @connect( (store)=> {
  // return {
  // action: store.action.,
  // };
// })
class App extends Component {
  constructor() {
    super();
    this.state = {
      "appId": Keys.appId,
      "serverURL": Keys.serverURL,
    };//state
  }//constructor
  render() {
    // parsePrepInit(this.state.serverURL, this.state.appId);
    Parse.initialize(this.state.appId);
    Parse.serverURL = this.state.serverURL;
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
  // parsePrepInit (serverURL, appId) {
  //   Parse.initialize(appId);
  //   Parse.serverURL = serverURL;
  // }//

} //class App

export default App;
