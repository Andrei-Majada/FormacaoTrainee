const roteador = require("express").Router();

const TabelaFornecedor = require("./modeloTabelaFornecedor");
const Fornecedor = require("./fornecedor");
const Serializador = require("../../Serializador");
const SerializadorFornecedor = require("../../Serializador")
    .SerializadorFornecedor;

roteador.get("/", async (req, res) => {
    const resultados = await TabelaFornecedor.listar();
    res.status(200);
    const serializador = new SerializadorFornecedor(
        res.getHeader("Content-Type")
    ).send(Serializador.serializar(resultados));
});

roteador.post("/", async (req, res, next) => {
    try {
        const dadosRecebidos = req.body;
        const fornecedor = new Fornecedor(dadosRecebidos);
        await fornecedor.criar();
        res.status(201);
        const serializador = new SerializadorFornecedor(
            res.getHeader("Content-Type"),
            ["email", "dataCriacao", "dataAtualizacao", "versao"]
        ).send(Serializador.serializar(fornecedor));
    } catch (err) {
        next(err);
    }
});

roteador.get("/:idFornecedor", async (req, res, next) => {
    try {
        const id = requisicao.params.idFornecedor;
        const fornecedor = new Fornecedor({ id: id });
        await fornecedor.carregar();
        res.status(200);
        const serializador = new SerializadorFornecedor(
            res.getHeader("Content-Type")
        ).send(Serializador.serializar(fornecedor));
    } catch (err) {
        next(err);
    }
});

roteador.put("/:idFornecedor", async (req, res, next) => {
    try {
        const id = req.params.idFornecedor;
        const dadosRecebidos = req.body;
        const dados = Object.assign({}, dadosRecebidos, { id: id });
        const fornecedor = new Fornecedor(dados);
        await fornecedor.atualizar();
        res.status(204).end();
    } catch (err) {
        next(err);
    }
});

roteador.delete("/:idFornecedor", async (req, res, next) => {
    try {
        const id = req.params.idFornecedor;
        const fornecedor = new Fornecedor({ id: id });
        await fornecedor.carregar();
        await fornecedor.remover();
        res.status(204).end();
    } catch (err) {
        next(err);
    }
});

module.exports = roteador;
