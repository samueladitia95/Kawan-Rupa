"use strict";

const { Event, Track } = require("../models");

class TracksController {
  static async getAll(req, res, next) {
    try {
      const tracks = await Track.findAll({
        where: { UserId: req.userData.id },
        include: { model: Event, attributes: { exclude: ["createdAt", "updatedAt"] } },
        attributes: { exclude: ["createdAt", "updatedAt"] },
        order: [["order", "ASC"]],
      });
      return res.status(200).json(tracks);
    } catch (err) {
      return next(er);
    }
  }

  static async addOne(req, res, next) {
    try {
      const { EventId } = req.body;
      const checkEventId = await Track.findOne({ where: { UserId: req.userData.id, EventId } });
      if (checkEventId) {
        return next({ name: "BadRequest", message: "Event Already Added" });
      } else {
        const { count: totalCount } = await Track.findAndCountAll({
          where: { UserId: req.userData.id },
        });
        const newTracked = await Track.create({
          UserId: req.userData.id,
          EventId,
          order: +totalCount + 1,
        });

        return res.status(201).json(newTracked);
      }
    } catch (err) {
      return next(er);
    }
  }

  static async deleteOne(req, res, next) {
    try {
      const { id } = req.params;
      const checkId = await Track.findOne({ where: { UserId: req.userData.id, id } });
      if (!checkId) {
        return next({ name: "Unauthorized", message: "You Do not have Access" });
      } else {
        const deleted = await Track.destroy({ where: { id } });

        if (deleted) {
          res.status(200).json({ message: "Delete Success" });
        } else {
          next({ name: "BadRequest", message: "Delete Failed" });
        }
      }
    } catch (err) {
      next(er);
    }
  }

  static async swapOrder(req, res, next) {
    try {
      const { firstId, secondId } = req.body;
      const firstEvent = await Track.findByPk(+firstId);
      const secondEvent = await Track.findByPk(+secondId);

      await Track.update({ order: secondEvent.order }, { where: { id: +firstId } });
      await Track.update({ order: firstEvent.order }, { where: { id: +secondId } });

      res.status(200).json({ message: "Update Success" });
    } catch (err) {
      next(er);
    }
  }
}

module.exports = TracksController;
