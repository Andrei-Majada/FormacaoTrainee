const express = require("express");
const {
    index,
    criarProduto,
    editarProduto,
} = require("../controllers/controllerProdutos");
//routes
module.exports = (app) => {
    app.get("/", index); //index
    app.post("/criarProduto", criarProduto); //criar produtos
    app.put("/editarProduto/:idLivro", editarProduto); //editar produtos pelo id
};
