const express = require("express");
require("./database/index.js");
//const routes = require("./routes");
const cors = require("cors");
// const app = express();


//app.use(express.json());
//app.use(cors());
//app.use(routes);
//app.listen(4003);

class app {
    constructor(){
        this.express = express()
        this.middleware(),
        this.routes(),
        this.cors()
    }
    middleware(){
        this.express.use(express.json());
    }
    routes(){
        this.express.use(require("./routes"));
    }
    cors(){
        this.express.use(cors());
    }
}
module.exports = new app().express;
