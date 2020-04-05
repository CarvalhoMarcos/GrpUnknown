const express = require("express");
require("./database/index.js");
const routes = require("./routes");
const cors = require("cors");
const app = express();


app.use(express.json());
app.use(cors());
app.use(routes);
app.listen(4003);
