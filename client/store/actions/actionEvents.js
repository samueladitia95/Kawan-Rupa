"use strict";

import axios from "axios";
import { url } from "../../config";

const GET_EVENTS = "GET EVENTS";
const GET_ONE_EVENT = "GET ONE EVENT";
const EMPTY_EVENT = "EMPTY EVENT";

export const getEvents = () => {
  return async (dispatch) => {
    try {
      const { data: events } = await axios({
        method: "get",
        url: `${url}/events`,
      });
      return dispatch({
        type: GET_EVENTS,
        payload: { events },
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const getOneEvent = (id) => {
  return async (dispatch) => {
    try {
      const { data: event } = await axios({
        method: "get",
        url: `${url}/events/${id}/detail`,
      });
      return dispatch({
        type: GET_ONE_EVENT,
        payload: { event },
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const emptyEvent = () => {
  return {
    type: EMPTY_EVENT,
  };
};
