const modeloTabela = require("../rotas/fornecedores/modeloTabelaFornecedor");

modeloTabela.sync().then(() => {
  console.log("tabela criada!").catch((err) => {
    console.log(err);
  });
});
