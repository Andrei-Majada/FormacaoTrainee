const express = require("express");
const {
    index,
    criarProduto,
    editarProduto,
    deletarProduto,
    listarProdutos,
    criarCategoria,
} = require("../controllers/controllerProdutos");
//routes
module.exports = (app) => {
    app.get("/", index); //index
    app.post("/produto/criar", criarProduto); //criar produtos
    app.put("/produto/editar/:idProduto", editarProduto); //editar produtos pelo id
    app.delete("/produto/excluir/:idProduto", deletarProduto); //excluir produto pelo id
    app.get("/produto/listar", listarProdutos); //listar todos os produtos
    app.post("/categoria/criar", criarCategoria);
};
