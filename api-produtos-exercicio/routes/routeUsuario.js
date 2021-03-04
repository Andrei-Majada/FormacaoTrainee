const express = require("express");
const { index } = require("../controllers/controllerUsuario");
//routes
module.exports = (app) => {
    app.get("/", index); //index
};
