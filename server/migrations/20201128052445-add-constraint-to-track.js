"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint("Tracks", {
      fields: ["UserId"],
      type: "foreign key",
      name: "fkey_tracks_users",
      references: {
        table: "Users",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
    await queryInterface.addConstraint("Tracks", {
      fields: ["EventId"],
      type: "foreign key",
      name: "fkey_tracks_events",
      references: {
        table: "Events",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint("Tracks", "fkey_tracks_users", {});
    await queryInterface.removeConstraint("Tracks", "fkey_tracks_events", {});
  },
};
