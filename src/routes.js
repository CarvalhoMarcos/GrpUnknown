const express = require("express");

const routes = express.Router();

const TestController = require("./controller/TestController");
// const SessionController = require("./controller/SessionController");
const UserController = require("./controller/UserController");
const MedicoController = require("./controller/MedicoController")


// routes.post("/", TestController.index);
routes.get("/usuario/:id?",UserController.index);
// routes.put("/usuario/",UserController.index);
routes.post("/usuario",UserController.store);
routes.delete("/usuario/:cpf/:tipo_usuario",UserController.destroy);

routes.get("/medico/:id?",MedicoController.index);
routes.post("/medico",MedicoController.store);
routes.delete("/medico/:cpf/",MedicoController.destroy);







module.exports = routes;
