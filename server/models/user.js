"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Track, {
        sourceKey: "id",
        foreignKey: "UserId",
      });
    }
  }
  User.init(
    {
      name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
          notEmpty: { msg: "User Name is Required" },
          notNull: { msg: "User Name is Required" },
        },
      },
    },
    {
      sequelize,
      modelName: "User",
    },
  );
  return User;
};
