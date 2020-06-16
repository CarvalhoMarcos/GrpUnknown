"use strict";
const DataTypes = require('sequelize').DataTypes;
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("validacoes", {
      id: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: DataTypes.UUIDV4,

      },
      laudo_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'laudos_medicos', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },

      },
      validador_id: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'medicos', // name of Target model
          key: 'cpf', // key in Target model that we're referencing
        },
      },
      status: {
        type: Sequelize.CHAR(1),
        allowNull: false

      },
      data_hora_validacao: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      dsc_diagn: {
        type: Sequelize.STRING(2000),
        allowNull: false
      },
      cid: {
        type: Sequelize.CHAR(3),
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
    return queryInterface.dropTable("validacoes");
  },
};
