"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    static associate(models) {
      Event.hasMany(models.Track, {
        sourceKey: "id",
        foreignKey: "EventId",
      });
    }
  }
  Event.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: "Event Name is Required" },
          notNull: { msg: "Event Name is Required" },
        },
      },
      thumbnail_url: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: "Event Thumbnail URL is Required" },
          notNull: { msg: "Event Thumnail URL is Required" },
          isUrl: { msg: "Event Thumnail URL is Invalid" },
        },
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: "Event Location is Required" },
          notNull: { msg: "Event Location is Required" },
        },
      },
      is_paid: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Event",
    },
  );
  return Event;
};
