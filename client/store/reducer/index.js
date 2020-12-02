"use strict";

const initialState = {
  access_token: "",
  name: "",
  events: [],
  event: {},
  tracked: [],
};

export default function reducer(state = initialState, actions) {
  switch (actions.type) {
    case "SET USER":
      return { ...state, access_token: actions.payload.access_token, name: actions.payload.name };
    case "GET EVENTS":
      return { ...state, events: actions.payload.events };
    case "GET ONE EVENT":
      return { ...state, event: actions.payload.event };
    case "GET TRACKED EVENTS":
      return { ...state, tracked: actions.payload.tracked };
    case "EMPTY EVENT":
      return { ...state, event: {} };
    default:
      return state;
  }
}
