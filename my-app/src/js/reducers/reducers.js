//type: "FETCH_USERS_PENDING"
//type: "FETCH_USERS_FULFILLED"
//type: "FETCH_USERS_REJECTED"
let initialState = {
  modded: false,
  action: null,
};
export default function reducer (state=initialState, action) {
  switch (action.type) {
    case "FETCH_USER_DATA_PENDING":{
      return {...state, modded: true, action: action.type};
    }
    case "FETCH_USER_DATA_FULFILLED":{
      return {...state, modded: true, action: action.type};
    }
    case "FETCH_USER_DATA_REJECTED":{
      return {...state, modded: true, action: action.type};
    }
    default:{
      console.log("action.type triggered! Do not have: ", action.type, " action-type handler, in reducers.js.");
      return initialState;
    }
//    return state;
  }
}
