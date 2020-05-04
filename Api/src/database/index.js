const Sequelize = require("sequelize");
const dbConfig = require("../config/database.js");
const Usuario = require("../models/Usuario");
const Medico = require("../models/Medico");
const Residente = require("../models/Residente");
const connection = new Sequelize(dbConfig);


Usuario.init(connection);
Medico.init(connection);
Residente.init(connection);
Usuario.associate(connection.models);
Medico.associate(connection.models);
Residente.associate(connection.models);


module.exports = connection;
