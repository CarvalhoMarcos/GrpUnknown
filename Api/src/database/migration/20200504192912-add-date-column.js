"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("usuarios", "data_nasc", {
      type: Sequelize.DATE,
      allowNull: true,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("usuarios", "data_nasc");
  },
};
