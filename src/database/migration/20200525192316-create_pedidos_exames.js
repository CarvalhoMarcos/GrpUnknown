"use strict";
const DataTypes = require('sequelize').DataTypes;
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("pedidos_exames", {
      id: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: DataTypes.UUIDV4,

      },
      paciente_id: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'usuarios', // name of Target model
          key: 'cpf', // key in Target model that we're referencing
        },

      },
      medico_id: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'medicos', // name of Target model
          key: 'cpf', // key in Target model that we're referencing
        },

      },

      data_prev: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      tipo_exame_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'tipo_exames', // name of Target model
          key: 'id', // key in Target model that we're referencing

        },
      },
      pdf_id: {
        type: Sequelize.UUID,
        allowNull: true,
        references: {
          model: 'arquivos_pdf', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
      },
      desc_diagn: {
        type: Sequelize.STRING(540),
        allowNull: false,
      },
      cid: {
        type: Sequelize.CHAR(3),
        allowNull: false,
      },
      status: {
        type: Sequelize.CHAR(1),
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
    return queryInterface.dropTable("pedidos_exames");
  },
};
