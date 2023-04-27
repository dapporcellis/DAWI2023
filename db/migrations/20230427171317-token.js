'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable("token", {
    
   });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("token");
  },
};
