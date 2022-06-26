"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          id: "1",
          lastName: "Villaperez",
          firstName: "Jose",
          email: "jose.villaprz@gmail.com",
          password:
            "$2a$10$Ayx0i1ckTLUElMRfAwRqr.xibZ5F6UL3x4U7INxoYDxMndZxi6Fpy",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
