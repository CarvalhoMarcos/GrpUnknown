"use strict";
const DataTypes = require('sequelize').DataTypes;
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("arquivos_pdf", {
      id: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      access_token: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      data_geracao: {
        type: Sequelize.DATE,
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
    return queryInterface.dropTable("arquivos_pdf");
  },
};