"use strict";

const { Event } = require("../models");

class EventsController {
  static async getAll(req, res, next) {
    try {
      const events = await Event.findAll({ attributes: { exclude: ["createdAt", "updatedAt"] } });
      return res.status(200).json(events);
    } catch (err) {
      return next(err);
    }
  }

  static async getOne(req, res, next) {
    try {
      const event = await Event.findByPk(+req.params.id, {
        attributes: { exclude: ["createdAt", "updatedAt"] },
      });
      if (!event) {
        return next({ name: "NotFound", message: "Event is not Found" });
      } else {
        res.status(200).json(event);
      }
    } catch (err) {
      next(err);
    }
  }
}

module.exports = EventsController;
