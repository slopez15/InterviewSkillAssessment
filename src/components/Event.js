import React, { Component } from 'react';
import {connect} from "react-redux";
import { Table } from "react-bootstrap";

import {userId} from "../Keys.key.js";
import {fetchUserEventsThunk} from "../actions/userActions"; //actions I want Event to execute.

//Should return data for events that a specific attended.
class Events extends Component {
  componentWillMount(){ //this loads data, but may be better to load on buttons, actions, etc.
    this.props.dispatch(fetchUserEventsThunk(userId));
  }
  //Render below is a table. not as nice as a media card.
  render() {
    //format for JSX
    //for the header of the table.
    let tableHeading = [
      "#",
      "eventPhoto",
      "eventName",
      "eventStartDate",
      "eventEndDate",
      "eventAttendeeCount",
    ];
    tableHeading = tableHeading.map( (key, i) => <th key={i}>{key}</th> );

    //to load the 1st render and the async data render.
    const eventInfoObjects = this.props.userReducer.payload;
    if (eventInfoObjects){ //this is just a quick solution for now.//look up this error: TypeError: Cannot read property 'map' of undefined
      let userEventData = eventInfoObjects.map( (eventInfo, i)=> {
        //just a dirty quick way to convert below objects into strings.
        const temp1 = JSON.stringify(eventInfo.eventStartDate);
        const temp2 = JSON.stringify(eventInfo.eventEndDate);
        return (
          <tr key={i}>
            <td>{i}</td>
            <td><img src={eventInfo.eventPhoto} width="20%" height="10%" /></td>
            <td>{eventInfo.eventName}</td>
            <td>{temp1}</td>
            <td>{temp2}</td>
            <td>{eventInfo.eventAttendeeCount}</td>
          </tr>
        )});
      return (
        <div className="Events">
          <h1>Below is a list of events from user {userId}!</h1>
          <Table striped bordered condensed hover>
              <thead>
                <tr>
                  {tableHeading}
                </tr>
              </thead>
              <tbody>
                  {userEventData}
              </tbody>
            </Table>
        </div>
      );
    }
    //1st RENDER
    return (
      <div className="Events">
        <h1>Below is a list of events from user {userId}!</h1>
        <Table striped bordered condensed hover>
            <thead>
              <tr>
                {tableHeading}
              </tr>
            </thead>
            <tbody>
            </tbody>
          </Table>
      </div>
    );
  }
}

export default  connect(store=>store)(Events);
//arg1 to return specific store data as props. Note storeData is initial states passed in from each reducer and initial store state.
//arg2 to return actionCreators
