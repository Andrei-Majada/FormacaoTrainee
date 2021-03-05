const express = require("express");
const {
    cadastrarUsuario,
    logarUsuario,
    deslogarUsuario,
} = require("../controllers/controllerUsuario");
//routes
module.exports = (app) => {
    app.post("/usuario/cadastrar", cadastrarUsuario); //cadastrar novo usuario
    app.post("/usuario/login", logarUsuario);
    app.get("/usuario/logout", deslogarUsuario);
};
