import React, { Component } from 'react';
import { Table } from "react-bootstrap";

class Events extends Component {
  render() {
    const tableHeading = [
      "#",
      "eventPhoto",
      "eventName",
      "eventDate",
      "eventTime",
      "eventAttendeeCount",
    ].map( (key, i) => <th key={i}>{key}</th> );


    //RENDERING
    return (
      <div className="Events">
        <h1>Below is a list of events from user {this.state.userId}!</h1>
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              {tableHeading}
            </tr>
          </thead>
          <tbody>
            {this.state.events}
          </tbody>
        </Table>
      </div>
    );
  }
}
//To get started, edit <code>src/App.js</code> and save to reload.

export default App;
