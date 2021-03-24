const express = require("express");
const http = require("http");

const app = express();
require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const DataBase = require("./database");
const models = require("./models");
DataBase(models);

require("./routes/routeUsuario")(app);
require("./routes/routeProdutos")(app);

const port = process.env.port || 8000;
app.set("port", port);
const server = http.createServer(app);
server.listen(port);
console.log("API rodando na porta: ", port);

module.exports = app;
