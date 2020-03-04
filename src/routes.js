const express = require("express");

const routes = express.Router();

const TestController = require("./controller/TestController");

routes.post("/", TestController.index);

module.exports = routes;
