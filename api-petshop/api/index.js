const express = require("express");
const bodyParser = require("body-parser");

const config = require("config");
const roteador = require("./rotas/fornecedores/index");
const NaoEncontrado = require("./erros/NaoEncontrado");
const CampoInvalido = require("./erros/CampoInvalido");
const DadosNaoFornecidos = require("./erros/DadosNaoFornecidos");

const app = express();

app.use(bodyParser.json());

app.use("/api/fornecedores", roteador);

app.use((err, req, res, next) => {
    let status = 500;
    if (err instanceof NaoEncontrado) {
        status = 404;
    } else if (
        err instanceof CampoInvalido ||
        err instanceof DadosNaoFornecidos
    ) {
        status = 400;
    } else {
        status = 400;
    }

    res.status(status).send(
        JSON.stringify({
            mensagem: err.message,
            id: err.idErro,
        })
    );
});

app.listen(config.get("api.porta"), () =>
    console.log(`A API esta funcionando na porta ${config.get("api.porta")}!`)
);
