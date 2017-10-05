import {Parse} from "parse";
import Keys from "../Keys.key";

//must run these 2 lines to use Parse to request from a parse server.
Parse.initialize(Keys.appId);
Parse.serverURL = Keys.serverURL;
//to test a regular synchornous actionCreator w/ action return.
export function testAction (){
  return {
    type: "TEST-Action",
    payload: "fakeData"
  };
}
//to test a thunk synchornous actionCreator.
export function testDispatch (){
  return function(dispatch) {
    dispatch({
      type: "TEST-Dispatch",
      payload: "fakeData",
    });
  };
}
//to test a react-promise-middleware async actionCreator w/ action return. 
export function fetchUserEvents (_userId){ //this is simpler, but still requires formatting of payload. Also, would need to update props for it to be nicer.
  return {
    type: "FETCH_USER_DATA",
    payload: Parse.Cloud.run("getCheckIn", {userId: Keys.userId}),
  };
}
//to test a thunk async actionCreator.
export function fetchUserEventsThunk (_userId){
  var request = "getCheckIn";
  var params = {
    userId: Keys.userId
  };
  return function (dispatch) {
    Parse.Cloud.run(request, params)
      .then( (ParseObjectList) => {
        let eventDataObject = ParseObjectList.map( (ParseObject, i) => {
          let eventData = ParseObject.attributes;
          // let {name, startDate, endDate, attendeeCount} = eventData;
          let eventPhoto = eventData.image._url;
          let eventName = eventData.name;
          let eventStartDate = eventData.startDate;
          let eventEndDate = eventData.endDate;
          let eventAttendeeCount = eventData.attendeeCount;

          //TODO Decide: Should I split start/end date into start/end date & start/end time.
          return { eventPhoto, eventName, eventStartDate, eventEndDate, eventAttendeeCount };
        })
        let action = {
          type: "FETCH_USER_DATA_FULFILLED",
          payload: eventDataObject,
        };
        dispatch(action);
      })
      .catch((err) => {
        dispatch({type: "FETCH_USER_DATA_REJECTED", payload: err})
      })
  };
}



/*
Parse returnse a Parse Promise
example:
Error
  {
    "code": 141,
    "error": "movie lookup failed"
  }
Successful
  { "result": 4.8 }
*/
