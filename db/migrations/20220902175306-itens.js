'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable("itens", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    idpedido:{
      type: Sequelize.INTEGER,
      references: {
        model: "pedido", 
        key: "id",
      }
    },
    valordoitem: {
      type: Sequelize.FLOAT,
    }
   });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("itens");
  },
};