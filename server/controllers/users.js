"use strict";

const { User } = require("../models");
const { createToken } = require("../helpers/jwt");

class UserController {
  static async identification(req, res, next) {
    try {
      let { name } = req.body;
      name = name.toLowerCase();
      const checkUser = await User.findOne({ where: { name } });
      if (checkUser) {
        const { id: userId, name: userName } = checkUser;
        res.status(201).json({ access_token: createToken({ id: userId, name: userName }) });
      } else {
        const newUser = await User.create({ name });
        const { id: newId, name: newName } = newUser;
        res.status(201).json({ access_token: createToken({ id: newId, name: newName }) });
      }
    } catch (err) {
      next(err);
    }
  }
}

module.exports = UserController;
