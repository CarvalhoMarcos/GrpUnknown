"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("residentes", {
      cpf: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
      },
      ano_res : {
        type: Sequelize.STRING(4),
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("residente");
  },
};
