const roteador = require("express").Router();

const TabelaFornecedor = require("./modeloTabelaFornecedor");
const Fornecedor = require("./fornecedor");
const NaoEncontrado = require("../../erros/NaoEncontrado");

roteador.get("/", async (req, res) => {
  const resultados = await TabelaFornecedor.listar();
  res.status(200).send(JSON.stringify(resultados));
});

roteador.post("/", async (req, res) => {
  try {
    const dadosRecebidos = req.body;
    const fornecedor = new Fornecedor(dadosRecebidos);
    await fornecedor.criar();
    res.status(201).send(JSON.stringify(fornecedor));
  } catch (err) {
    res.status(400).send(
      JSON.stringify({
        mensagem: err.message,
      })
    );
  }
});

roteador.get("/:idFornecedor", async (req, res) => {
  try {
    const id = requisicao.params.idFornecedor;
    const fornecedor = new Fornecedor({ id: id });
    await fornecedor.carregar();
    res.status(200).send(JSON.stringify(fornecedor));
  } catch (err) {
    res.status(404).send(
      JSON.stringify({
        mensagem: err.message,
      })
    );
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

roteador.delete("/:idFornecedor", async (req, res) => {
  try {
    const id = req.params.idFornecedor;
    const fornecedor = new Fornecedor({ id: id });
    await fornecedor.carregar();
    await fornecedor.remover();
    res.status(204).end();
  } catch (err) {
    res.status(404).send(
      JSON.stringify({
        mensagem: err.message,
      })
    );
  }
});

module.exports = roteador;