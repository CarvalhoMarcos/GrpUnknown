const express = require("express");

const routes = express.Router();

// const TestController = require("./controller/TestController");
const SessionController = require("./controller/SessionController");
const UserController = require("./controller/UserController");
const MedicoController = require("./controller/MedicoController");
const ResidenteController = require("./controller/ResidenteController");
const ensureAuthenticated = require("./middlewares/ensureAuthenticated");
const TipoExameController = require("./controller/TipoExameController");
const PedidoExameController = require("./controller/PedidoExameController");
const RegistroExameController = require("./controller/RegistroExameController");
const LaudoMedicoController = require("./controller/LaudoMedicoController");
const ValidacaoController = require("./controller/ValidacaoController");

// routes.post("/", TestController.index);
routes.get("/usuario/:id?", UserController.index);
// routes.put("/usuario/",UserController.index);
routes.post("/usuario", UserController.store);
routes.delete("/usuario/:cpf/:tipo_usuario", UserController.destroy);

routes.get("/medico/:id?", MedicoController.index);
routes.post("/medico", MedicoController.store);
routes.delete("/medico", ensureAuthenticated, MedicoController.destroy);

routes.delete("/residente", ensureAuthenticated, ResidenteController.destroy);
routes.get("/residente/:id?", ResidenteController.index);
routes.post("/residente", ResidenteController.store);

routes.get("/tipo_exame", TipoExameController.index);
routes.post("/tipo_exame", TipoExameController.store);


routes.get("/pedidosExame/:id?", PedidoExameController.index);
routes.post("/pedidosExame", ensureAuthenticated, PedidoExameController.store);

routes.get("/registrosExame/:id?", RegistroExameController.index);
routes.post("/registrosExame", ensureAuthenticated, RegistroExameController.store);
routes.delete("/registrosExame/:id?", RegistroExameController.destroy);
routes.get("/registrosPendentes", RegistroExameController.registrosPendentes);

routes.get("/laudosMedicos", LaudoMedicoController.index);
routes.post("/laudosMedicos", ensureAuthenticated, LaudoMedicoController.store);
routes.delete("/laudosMedicos/:id?", LaudoMedicoController.destroy);

routes.get("/validacoes", ValidacaoController.index);
routes.post("/validacoes", ensureAuthenticated, ValidacaoController.store);
routes.get("/validacaoCompleta", ValidacaoController.validacaoCompleta)



routes.post("/login", SessionController.login);

module.exports = routes;
