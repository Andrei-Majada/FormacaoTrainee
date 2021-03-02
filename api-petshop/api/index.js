const express = require("express");
const bodyParser = require("body-parser");

const config = require("config");
const roteador = require("./rotas/fornecedores/index");
const NaoEncontrado = require("./erros/NaoEncontrado");

const app = express();

app.use(bodyParser.json());

app.use("/api/fornecedores", roteador);

app.use((err, req, res, next) => {
  if (err instanceof NaoEncontrado) {
    res.status(404);
  } else {
    res.status(400);
  }
  res.send(
    JSON.stringify({
      mensagem: err.message,
      id: err.idErro,
    })
  );
});

app.listen(config.get("api.porta"), () =>
  console.log(`A API esta funcionando na porta ${config.get("api.porta")}!`)
);
