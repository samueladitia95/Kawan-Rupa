"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Track extends Model {
    static associate(models) {
      Track.belongsTo(models.User, {
        targetKey: "id",
        foreignKey: "UserId",
      });
      Track.belongsTo(models.Event, {
        targetKey: "id",
        foreignKey: "EventId",
      });
    }
  }
  Track.init(
    {
      UserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: { args: 1, msg: "User ID is Invalid" },
          notNull: { msg: "User ID is Invalid" },
        },
      },
      EventId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: { args: 1, msg: "Event ID is Invalid" },
          notNull: { msg: "Event ID is Invalid" },
        },
      },
      order: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: { msg: "Order is Invalid" },
        },
      },
    },
    {
      sequelize,
      modelName: "Track",
    },
  );
  return Track;
};
