const Sequelize = require("sequelize");
const dbConfig = require("../config/database.js");
const Usuario = require("../models/Usuario");
const Medico = require("../models/Medico");
const Residente = require("../models/Residente");
const TipoExame = require("../models/TipoExame");
const ArquivoPdf = require("../models/ArquivoPdf");
const PedidosExame = require("../models/PedidosExame");
const RegistroExame = require("../models/RegistroExame");
const LaudoMedico = require("../models/LaudoMedico");
const Validacao = require("../models/Validacao");
const connection = new Sequelize(dbConfig);


Usuario.init(connection);
Medico.init(connection);
Residente.init(connection);
TipoExame.init(connection);
ArquivoPdf.init(connection);
PedidosExame.init(connection);
RegistroExame.init(connection);
LaudoMedico.init(connection);
Validacao.init(connection);

Usuario.associate(connection.models);
Medico.associate(connection.models);
Residente.associate(connection.models);
TipoExame.associate(connection.models);
ArquivoPdf.associate(connection.models);
PedidosExame.associate(connection.models);
RegistroExame.associate(connection.models);
LaudoMedico.associate(connection.models);
Validacao.associate(connection.models);

module.exports = connection;
