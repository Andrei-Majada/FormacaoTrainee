const roteador = require("express").Router();

const TabelaFornecedor = require("./modeloTabelaFornecedor");
const Fornecedor = require("./fornecedor");

roteador.get("/", async (req, res) => {
  const resultados = await TabelaFornecedor.listar();
  res.send(JSON.stringify(resultados));
});

roteador.post("/", async (req, res) => {
  const dadosRecebidos = req.body;
  const fornecedor = new Fornecedor(dadosRecebidos);
  await fornecedor.criar();
  res.send(JSON.stringify(fornecedor));
});

roteador.get("/:idFornecedor", async (req, res) => {
  try {
    const id = requisicao.params.idFornecedor;
    const fornecedor = new Fornecedor({ id: id });
    await fornecedor.carregar();
    res.send(JSON.stringify(fornecedor));
  } catch (err) {
    res.send(
      JSON.stringify({
        mesagem: error.message,
      })
    );
  }
});

roteador.put("/:idFornecedor", async (req, res) => {
  try {
    const id = req.params.idFornecedor;
    const dadosRecebidos = req.body;
    const dados = Object.assign({}, dadosRecebidos, { id: id });
    const fornecedor = new Fornecedor(dados);
    await fornecedor.atualizar();
    res.end();
  } catch (error) {
    res.send(
      JSON.stringify({
        mesagem: erro.message,
      })
    );
  }
});

module.exports = roteador;
