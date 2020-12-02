"use strict";

import axios from "axios";
import { url } from "../../config";

const GET_TRACKED_EVENTS = "GET TRACKED EVENTS";

export const getTracked = () => {
  return async (dispatch, getState) => {
    try {
      const { data: tracked } = await axios({
        method: "get",
        headers: { access_token: getState().access_token },
        url: `${url}/tracked`,
      });
      console.log(tracked, "data");
      return dispatch({
        type: GET_TRACKED_EVENTS,
        payload: { tracked },
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const addTracked = (EventId) => {
  return async (dispatch, getState) => {
    try {
      await axios({
        method: "post",
        headers: { access_token: getState().access_token },
        url: `${url}/tracked`,
        data: { EventId },
      });
      return dispatch(getTracked());
    } catch (err) {
      console.log(err);
    }
  };
};

export const deleteTracked = (id) => {
  return async (dispatch, getState) => {
    try {
      await axios({
        method: "delete",
        headers: { access_token: getState().access_token },
        url: `${url}/tracked/${id}/delete`,
      });
      return dispatch(getTracked());
    } catch (err) {
      console.log(err);
    }
  };
};
