"use strict";
const DataTypes = require('sequelize').DataTypes;
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("registro_exames", {
      id: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: DataTypes.UUIDV4,

      },
      pedido_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'pedidos_exames', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },

      },
      examinador_id: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'residentes', // name of Target model
          key: 'cpf', // key in Target model that we're referencing
        },

      },

      data_hora_exame: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      pdf_id: {
        type: Sequelize.UUID,
        allowNull: true,
        references: {
          model: 'arquivos_pdf', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
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
    return queryInterface.dropTable("registros_exame");
  },
};
