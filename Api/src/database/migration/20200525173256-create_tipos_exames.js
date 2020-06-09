"use strict";
const DataTypes = require('sequelize').DataTypes;
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("tipo_exames", {
      id: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      nome_exame: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      recomendacoes: {
        type: Sequelize.STRING(540),
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
    return queryInterface.dropTable("tipo_exames");
  },
};