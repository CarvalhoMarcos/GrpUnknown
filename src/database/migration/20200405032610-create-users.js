"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("usuarios", {
      cpf: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tipo_usuario:{
        type: Sequelize.CHAR,
        allowNull:false,
        primaryKey:true
      },
      password_hash:{
        type: Sequelize.STRING,
        allowNull:false
      },
      sexo:{
        type: Sequelize.CHAR,
        allowNull:false,
      }, cor:{
        type: Sequelize.STRING,
        allowNull:false
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
    return queryInterface.dropTable("usuarios");
  },
};
