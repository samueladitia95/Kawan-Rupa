"use strict";

const { User } = require("../models");
const { decodeToken } = require("../helpers/jwt");

const authentication = async (req, res, next) => {
  try {
    const { access_token } = req.headers;
    if (access_token) {
      req.userData = decodeToken(access_token);
      const user = User.findByPk(req.userData.id);
      if (!user) {
        res.status(404).json({ message: "Not Found" });
      } else {
        next();
      }
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { authentication };
