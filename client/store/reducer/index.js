"use strictcd";

const initialState = {
  access_token: "",
  name: "",
  events: [],
  event: {},
};

export default function reducer(state = initialState, actions) {
  switch (actions.type) {
    case "SET USER":
      return { ...state, access_token: actions.payload.access_token, name: actions.payload.name };
    case "GET EVENTS":
      return { ...state, events: actions.payload.events };
    case "GET ONE EVENT":
      return { ...state, event: actions.payload.event };
    default:
      return state;
  }
}
