const Sequelize = require("sequelize");
const dbConfig = require("../config/database.js");
const Usuario = require("../models/Usuario");
const connection = new Sequelize(dbConfig);


Usuario.init(connection);


module.exports = connection;
