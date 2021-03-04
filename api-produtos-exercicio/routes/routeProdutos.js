const express = require("express");
const { index, criarProduto } = require("../controllers/controllerProdutos");
//routes
module.exports = (app) => {
    app.get("/", index); //index
    app.post("/criarProduto", criarProduto); //criar produtos
};
