import React from 'react';
import { Parse } from "parse";
import promise from "redux-promise-middleware";

import store from "../../store.js";
import Keys from "../other/Keys.key.js"; //better to import where needed. Don't place where need to pass to other Components.

//keys
// const userId = Keys.userId;

//promise to obtain secret user's data.
//call getCheckIn from parse-server and format data we only need into an object.
const userEventData = Parse.Cloud.run('getCheckIn', { userId: Keys.userId })
  .then( (ParseObjectList) => {
    return (ParseObjectList.map( (ParseObject, i) => {
      let eventData = ParseObject.attributes;
      let eventPhoto = eventData.image._url;
      let eventName = eventData.name;
      //TODO Decide: Should I split start/end date into start/end date & start/end time.
      let eventStartDate = eventData.startDate;
      let eventEndDate = eventData.endDate;
      let eventAttendeeCount = eventData.attendeeCount;
      return ({ eventPhoto, eventName, eventStartDate, eventEndDate, eventAttendeeCount });
  }));
});
//format object into JSX. For table.
// const userEventDataFormatted = userEventData.then( (_events) => {
//   // console.log("events-: ", events); //keeps looping?
//   let eventsJSX = _events.map( (key, i) => <tr key={i}><td key={i}>i</td><td>{key.eventPhoto}</td><td>{key.eventName}</td><td>{key.eventStartDate}</td><td>{key.eventEndDate}</td><td>{key.eventAttendeeCount}</td></tr>);
//   console.log("eventsJSX: ", eventsJSX);
//   console.log("this.state.events: ", this.state.events);
//   if (this.state.events == eventsJSX){
//     this.setState({events : eventsJSX});
//   }
//   return (eventsJSX);
// });


// export function fetchUserEventData(_userId){
//   return {
//     type: "FETCH_USER_DATA",
//     payload: userEventDataFormatted(_userId),
//   };
// }



/*const disp = store.dispatch({
  type: "FETCH_USER_DATA",
  payload: userEventDataFormatted,
});

export function fetchUserEventData(){
  return ( disp );
}
*/




//REDUX-PROMISE-MIDDLEWARE FORMAT
// store.dispatch({
// 	type: "FETCH_USERS",
// 	payload: axios.get("http://rest.learncode.academy/api/wstern/users"),
// });
