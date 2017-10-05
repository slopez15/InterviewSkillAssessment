const _state = {
  fetching: false,
  fetched: false,
  error: null,
};
//handles actions triggered via dispatch. Named accordingly for react-promise-middleware.
export default function reducer(state=_state, action){  //Do not assign within. {stateName}. Otherwise, state will be a {} in userReducer with props, instead of state props within userReducer.
  switch (action.type) {
    case "FETCH_USER_DATA_PENDING":{
      return {...state, fetching: true};
    }
    case "FETCH_USER_DATA_FULFILLED": {
      return {...state,
        fetching: false,
        fetched: true,
        payload: action.payload,
      };
    }
    case "FETCH_USER_DATA_REJECTED": {
      return {...state,
        fetching: false,
        error: action.payload,
      };
    }
    default: {
      console.log("dispatch triggered! Do not have a reducer handler in `userReducer.js` for the action.type called, ", action.type, ".");
      return {...state};
    }
  }
}
