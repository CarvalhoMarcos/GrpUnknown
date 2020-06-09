"use strict";
const DataTypes = require('sequelize').DataTypes;
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("laudos_medicos", {
      id: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: DataTypes.UUIDV4,

      },
      exame_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'registro_exames', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },

      },
      paciente_id: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'usuarios', // name of Target model
          key: 'cpf', // key in Target model that we're referencing
        },

      },
      autor_id: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'usuarios', // name of Target model
          key: 'cpf', // key in Target model that we're referencing
        },

      },
      data_hora_laudo: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      dsc_diagn: {
        type: Sequelize.STRING(2000),
        allowNull: false
      },

      validado: {
        type: Sequelize.BOOLEAN,
        allowNull: false
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
    return queryInterface.dropTable("laudos_medicos");
  },
};
