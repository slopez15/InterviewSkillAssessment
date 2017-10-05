import {Parse} from "parse";
import Keys from "../Keys.key";

export default function fetchUserEvents (_userId){
  var request = "getCheckIn";
  var params = {
    userId: Keys.userId
  };
  return (dispatch){
    Parse.Cloud.run(request, params)
      .then( (ParseObjectList) => {
        ParseObjectList.map( (ParseObject, i) => {
          let eventData = ParseObject.attributes;
          let {name, startDate, endDate, attendeeCount} = eventData;
          let eventPhoto = eventData.image._url;
          //TODO Decide: Should I split start/end date into start/end date & start/end time.
          let eventDataObject = { eventPhoto, eventName: name, eventStartDate: startDate, eventEndDate: endDate, eventAttendeeCount: attendeeCount };
          let action = {
            type: "FETCH_USER_DATA_FULFILLED",
            payload: eventDataObject,
          }
          dispatch(action)
        })
      })
      .catch((err) => {
        dispatch({type: "FETCH_USER_DATA_REJECTED", payload: err})
      })
  };
}
/*
async data should be placed in payload as object format.
*/
/*
Parse returnse a Parse Promise
example:
Successful
  { "result": 4.8 }
Error
  {
    "code": 141,
    "error": "movie lookup failed"
  }
*/
