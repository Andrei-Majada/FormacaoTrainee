const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const models = require("./models");

models.sequelize
    .sync()
    .then(function () {
        console.log("Database connected");
    })
    .catch(function (err) {
        console.log(err, "Something went wrong with the db connection");
    });

require("./routes/routeUsuario")(app);
require("./routes/routeProdutos")(app);

const port = parseInt(process.env.PORT, 10) || 8000;
app.set("port", port);
const server = http.createServer(app);
server.listen(port);
console.log("API rodando na porta: ", port);

module.exports = app;
