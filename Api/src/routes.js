const express = require("express");

const routes = express.Router();

const TestController = require("./controller/TestController");
const SessionController = require("./controller/SessionController");
const UserController = require("./controller/UserController");
const MedicoController = require("./controller/MedicoController");
const ResidenteController = require("./controller/ResidenteController");
const ensureAuthenticated = require("./middlewares/ensureAuthenticated");

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

routes.post("/login", SessionController.login);

module.exports = routes;
