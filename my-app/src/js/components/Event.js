import React, { Component } from 'react';
import { Table } from "react-bootstrap";

//actions
//const dirActions = "../actions/";
import actions from "../actions/actions.js";

/* TODO
unit tests
deploy Heroku

SEND COMPLETED PROJECT TO: Keyul Shah - Keyul@asu.edu
GitHub repository – to see the code
Heroku deployment URL – to see the actual working project
*/

//Need a way for site to update after getting data from elsewhere.
export default class Event extends Component {
  constructor(){
    super();
    this.state = {
      "tableHeading": null,
      "events": null,
    };
  }
  // componentWillMount() {
  //   this.props.dispatch(fetchUserEventData());
  // }

  render() {
    // const tableHeading = getTableHeading();
    // const userEventData = getUserEventData (this.state.userId);
    // const userEventDataFormatted = getUserEventDataFormatted (userEventData);
    //const { actions } = this.props;
    const tableHeading = [
      "#",
      "eventPhoto",
      "eventName",
      "eventDate",
      "eventTime",
      "eventAttendeeCount",
    ].map( (key, i) => <th key={i}>{key}</th> );
    // this.setState({ tableHeading });



    //HTML <Event />
    return (
      <div className="Event">
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
  // /*global getTableHeading*/
  // getTableHeading () {
  //   const tableHeading = [
  //     "#",
  //     "eventPhoto",
  //     "eventName",
  //     "eventDate",
  //     "eventTime",
  //     "eventAttendeeCount",
  //   ].map( (key, i) => <th key={i}>{key}</th> );
  //   this.setState({ tableHeading });
  //   return tableHeading;
  // }
  // /*global getUserEventData*/
  // getUserEventData (_userId){
  //   //Obtain past events, and event data, of a particular user. //should return a list of event objects and their details. [{event1Data}, ...]
  //   return (
  //     Parse.Cloud.run('getCheckIn', { userId: _userId }).then( (ParseObjectList) => {
  //       console.log("ParseObjectList: ", ParseObjectList);
  //       return (ParseObjectList.map( (ParseObject, i) => {
  //         let eventData = ParseObject.attributes;
  //         let eventPhoto = eventData.image._url;
  //         let eventName = eventData.name;
  //         //TODO Decide: Should I split start/end date into start/end date & start/end time.
  //         let eventStartDate = eventData.startDate;
  //         let eventEndDate = eventData.endDate;
  //         let eventAttendeeCount = eventData.attendeeCount;
  //         return ({ eventPhoto, eventName, eventStartDate, eventEndDate, eventAttendeeCount });
  //       }));
  //     }).then( (events) => {
  //       this.setState({ events });
  //       console.log("events: ", events);
  //       return events;
  //     })
  //   );
  // }
  // /*global getUserEventDataFormatted*/
  // getUserEventDataFormatted (_userEventData){
  //   return (
  //     _userEventData.then( (events) => {
  //       //events is [{}, {}, (...)]
  //       return (events.map( (key, i) =>
  //         <tr key={i}><td key={i}>{i}</td><td>{key.eventPhoto}</td><td>{key.eventName}</td><td>{key.eventStartDate}</td><td>{key.eventEndDate}</td><td>{key.eventAttendeeCount}</td></tr>
  //       ))
  //     })
  //   );
  // }



} //class Event



/* SCRATCH
//const { eventPhoto,  eventName,  eventDate,  eventTime, eventAttendeeCount } = this.props;
//<Col xs={6} md={4}>{Events}</Col>

//stringJSX - String style
// console.log(key.eventName);
  // let stringJSX =
  //   "<tr key=" + i + ">" +
  //     "<td key=" + i + ">" + i + "</td>" +
  //     "<td>" + key.eventPhoto + "</td>" +
  //     "<td>" + key.eventName + "</td>" +
  //     "<td>" + key.eventStartDate + "</td>" +
  //     "<td>" + key.eventEndDate + "</td>" +
  //     "<td>" + key.eventAttendeeCount + "</td>" +
  //   "</tr>"; //TODO wrong? shouldn't be text string.
// console.log(stringJSX);
//   return stringJSX;
// });
//TIP: Not allowed to setState inside render
// this.setState({events : eventsJSX});
*/
/*
REMEMBER
window.var = var; //allows access to var in browser console.
(arr.map(key, i) = > stuff)
*/


/*
Tree of Data obtained
I Need:
  eventPhoto, eventName, eventDate, eventTime, eventAttendeeCount
Structure-Abridged:
ParseObjectList[
  *ParseObject: {
    *attributes: {
      //What we want
      name: "Startup Weekend Artificial Intelligence - Paris 2nd Edition"
      image: ParseFile {
        _name: "0c497f9d0e6a1f80024f792e60a3dae7_event_image.jpg"
        _url: "http://eventkey.herokuapp.com/parse/files/f3U4dybGW4Uk5BDIMMVWmN1Mnn142P3XFv8eigwn/0c497f9d0e6a1f80024f792e60a3dae7_event_image.jpg"
      }
      startDate: Fri Sep 29 2017 23:00:00 GMT-0700 (US Mountain Standard Time)
      endDate: Sat Sep 30 2017 12:00:00 GMT-0700 (US Mountain Standard Time) {}
      attendeeCount: 3
    } //attributes
  } //ParseObject
] //ParseObjectList
//URL Base for BASE+{image._name}: http://eventkey.herokuapp.com/parse/files/f3U4dybGW4Uk5BDIMMVWmN1Mnn142P3XFv8eigwn/
//or {image._url}

Structure:
ParseObjectList
  *ParseObject
    className: "Event"
    id: "CaeDGEuzVc"
    _objCount: 198
    *attributes: {
      **attendeeCount: 3
      createdAt: Fri Sep 29 2017 00:11:22 GMT-0700 (US Mountain Standard Time) {}
      **endDate: Sat Sep 30 2017 12:00:00 GMT-0700 (US Mountain Standard Time) {}
      host: ParseUser {
        className: "_User"
        id: "rAsoCSwr14"
        _objCount: 1
        attributes: {} {}
        createdAt: undefined
        updatedAt: undefined
      }
      image: ParseFile {
        _name: "0c497f9d0e6a1f80024f792e60a3dae7_event_image.jpg"
        **_url: "http://eventkey.herokuapp.com/parse/files/f3U4dybGW4Uk5BDIMMVWmN1Mnn142P3XFv8eigwn/0c497f9d0e6a1f80024f792e60a3dae7_event_image.jpg"
      }
      isPending: false
      location: ParseGeoPoint {
        _latitude/latitude: 48.856614
        _longitude/longitude: 2.3522219
      }
      **name: "Startup Weekend Artificial Intelligence - Paris 2nd Edition"
      openDate: Fri Sep 29 2017 20:00:00 GMT-0700 (US Mountain Standard Time)
      **startDate: Fri Sep 29 2017 23:00:00 GMT-0700 (US Mountain Standard Time)
      updatedAt: Fri Sep 29 2017 15:15:40 GMT-0700 (US Mountain Standard Time)
    }
    createdAt: Fri Sep 29 2017 00:11:22 GMT-0700 (US Mountain Standard Time)
    updatedAt: Fri Sep 29 2017 15:15:40 GMT-0700 (US Mountain Standard Time)
*/
