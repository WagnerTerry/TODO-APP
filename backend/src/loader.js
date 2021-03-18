const server = require("./config/server")
require("./config/database")
require('./config/routes')(server) //resultado da chamada é um método