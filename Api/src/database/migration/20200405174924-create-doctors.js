"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("medicos", {
      cpf: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
      },
      crm : {
        type: Sequelize.STRING(12),
        allowNull: false,
      },
      eh_docente: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      titulo_uni : {
        type: Sequelize.STRING,
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
    return queryInterface.dropTable("medicos");
  },
};
