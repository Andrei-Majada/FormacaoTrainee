const express = require("express");
const { cadastrarUsuario } = require("../controllers/controllerUsuario");
//routes
module.exports = (app) => {
    app.post("/cadastrarUsuario", cadastrarUsuario); //cadastrar novo usuario
};
