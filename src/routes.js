const express = require("express");

const routes = express.Router();

const TestController = require("./controller/TestController");
// const SessionController = require("./controller/SessionController");
const UserController = require("./controller/UserController");


routes.post("/", TestController.index);
routes.post("/usuario",UserController.store);





module.exports = routes;
