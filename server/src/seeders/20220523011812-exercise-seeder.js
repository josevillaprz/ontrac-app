"use strict";
const { v4: uuidv4 } = require("uuid");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Exercises",
      [
        {
          id: "1",
          name: "Bench press",
          sets: 4,
          reps: 8,
          pounds: 165,
          userId: "1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "2",
          name: "Overhead press",
          sets: 2,
          reps: 10,
          pounds: 125,
          userId: "1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Exercises", null, {});
  },
};
