import React, { Component } from 'react';
import { Table } from "react-bootstrap";
import Parse from "parse";
import Keys from "../other/Keys.key.js";

export default class Event extends Component {
  render() {
    //Temporary HardCode
    const appID = Keys.appID;
    const userID = Keys.userID;
    const serverURL = Keys.serverURL;
    const headLines = [
      "#",
      "eventPhoto",
      "eventName",
      "eventDate",
      "eventTime",
      "eventAttendeeCount",
    ].map( (key, i) => <th key={i}>{key}</th> );
    const events = [
      { "eventPhoto":"p1", "eventName":"e1", "eventDate":"d1", "eventTime":"t1", "eventAttendeeCount":"ac1" },
      { "eventPhoto":"p2", "eventName":"e2", "eventDate":"d2", "eventTime":"t2", "eventAttendeeCount":"ac2" },
      { "eventPhoto":"p3", "eventName":"e3", "eventDate":"d3", "eventTime":"t3", "eventAttendeeCount":"ac3" },
    ].map( (key, i) => <tr key={i}><td key={i}>{i}</td><td>{key.eventPhoto}</td><td>{key.eventName}</td><td>{key.eventDate}</td><td>{key.eventTime}</td><td>{key.eventAttendeeCount}</td></tr> );




    //Parse for event information
    /*
    1. Have you used parse JavaScript SDK with React?
      /
    2. Have you tried to pass API ID before calling 'getcheckIn' function?
      .
    3. Have you mentioned 'getcheckIn' function name in parse.cloud.define() ?
      .
    4. Have you passed userId as a parameter in parse.cloud.define()?
      .
    .
    */
    Parse.initialize("my-app");
    Parse.serverURL = serverURL;
    console.log("Event Print");
    console.log("Parse.Cloud: ", Parse.Cloud );
    console.log("Keys: ", appID, "\n", userID );
    /*
    Parse.Cloud.define( "getCheckIn", (request, response) => {
      //const query = new Parse.Query("Hello World!");
      response.success ("Hello World!");
      //userId
    } );
    */
/*
    //
    HashMap<String, Object> params = new HashMap<String, Object>();
    params.put("userId", "X8RVN508nc");


    //
    Parse.Cloud.define("getCheckIn", function(request, response) {
      const query = new Parse.Query("userId");
    });
*/



    return (
      <div className="Event">
        <h1>Events - Below is a list of events from user User!</h1>
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              {headLines}
            </tr>
          </thead>
          <tbody>
            {events}
          </tbody>
        </Table>

      </div>
    );
  }
}



/* SCRATCH



.


//const { eventPhoto,  eventName,  eventDate,  eventTime, eventAttendeeCount } = this.props;


//<Col xs={6} md={4}>{Events}</Col>
//        eventPhoto: {eventPhoto}, eventName: {eventName}, eventDate: {eventDate}, eventTime: {eventTime}, eventAttendeeCount: {eventAttendeeCount}
// .map()(title, i) => <Event key={i} eventPhoto={eventPhoto} eventName={eventName} eventDate={eventDate} eventTime={eventTime} eventAttendeeCount={eventAttendeeCount} />



constructor() {
  super();
  // this.state = {
  //   //var: "value"
  // };//state
}//constructor


const Events = [
  "Event Name1",
  "Event Name1"
].map( (key) => <th>{key}</th> );
const photos = [
  "p1",
  "p2"
];
const names = [
  "n1",
  "n2"
];
const dates = [
  "d1",
  "d2"
];
const times = [
  "t1",
  "t2"
];
const attendeeCounts = [
  "ac1",
  "ac2"
];

*/
