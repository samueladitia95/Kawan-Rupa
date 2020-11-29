"use strict";

const jwt = require("jsonwebtoken");

const createToken = (obj) => {
  return jwt.sign(obj, "rahasia");
};

const decodeToken = (token) => {
  return jwt.verify(token, "rahasia");
};

module.exports = {
  createToken,
  decodeToken,
};
