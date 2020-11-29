"use strict";

const fs = require("fs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      let events = JSON.parse(fs.readFileSync("./seeders/data/events.json", "utf8"));
      events.forEach((el) => {
        el.createdAt = new Date();
        el.updatedAt = new Date();
      });
      await queryInterface.bulkInsert("Events", events, {});
    } catch (err) {
      console.log(err);
    }
  },

  down: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.bulkDelete("Events", events, {});
    } catch (err) {
      console.log(err);
    }
  },
};
