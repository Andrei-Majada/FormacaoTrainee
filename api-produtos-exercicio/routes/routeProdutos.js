const express = require("express");
const {
    index,
    criarProduto,
    editarProduto,
    deletarProduto,
    listarProdutos,
} = require("../controllers/controllerProdutos");
//routes
module.exports = (app) => {
    app.get("/", index); //index
    app.post("/criarProduto", criarProduto); //criar produtos
    app.put("/editarProduto/:idProduto", editarProduto); //editar produtos pelo id
    app.delete("/excluirProduto/:idProduto", deletarProduto); //excluir produto pelo id
    app.get("/listarProdutos", listarProdutos); //listar todos os produtos
};
