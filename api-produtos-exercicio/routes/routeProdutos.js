const express = require("express");
const {
    index,
    criarProduto,
    editarProduto,
    deletarProduto,
    listarProdutos,
    criarCategoria,
    ListarProdutosNome,
    ListarProdutosAtivos,
} = require("../controllers/controllerProdutos");
//routes
module.exports = (app) => {
    app.get("/", index); //index
    app.post("/produto/criar", criarProduto); //criar produtos
    app.put("/produto/:idProduto", editarProduto); //editar produtos pelo id
    app.delete("/produto/:idProduto", deletarProduto); //excluir produto pelo id
    app.get("/produto/listar", listarProdutos); //listar todos os produtos
    app.get("/produto/:nomeProduto", ListarProdutosNome); //buscar produto por nome
    app.get("/produto/ativos", ListarProdutosAtivos); //buscar produtos das categorias ativas
    app.post("/categoria/criar", criarCategoria); //criar novas categorias de produto
};
