"use strict";

import axios from "axios";
import { url } from "../../config";

const SET_USER = "SET USER";

export const setUser = ({ name }) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "post",
        url: `${url}/user`,
        data: {
          name,
        },
        headers: { "Content-Type": "application/json" },
      });
      const { access_token } = data;
      return dispatch({
        type: SET_USER,
        payload: {
          access_token,
          name,
        },
      });
    } catch (err) {
      console.log(err);
    }
  };
};
