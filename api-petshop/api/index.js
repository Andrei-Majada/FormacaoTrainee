const express = require("express");
const bodyParser = require("body-parser");

const config = require("config");
const roteador = require("./rotas/fornecedores/index");
const NaoEncontrado = require("./erros/NaoEncontrado");
const CampoInvalido = require("./erros/CampoInvalido");
const DadosNaoFornecidos = require("./erros/DadosNaoFornecidos");
const ValorNaoSuportado = require("./erros/ValorNaoSuportado");
const formatosAceitos = require("./Serializador").formatosAceitos;
const SerializadorErro = require("./Serializador").SerializadorErro;

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    let formatoRequisitado = req.header("Accept");

    if (formatoRequisitado === "*/*") {
        formatoRequisitado = "application/json";
    }

    if (formatosAceitos.indexOf(formatoRequisitado) === -1) {
        res.status(406).end();
        return;
    }

    res.setHeader("Content-Type", formatoRequisitado);
    next();
});

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
    } else if (err instanceof ValorNaoSuportado) {
        status = 406;
    }

    const serializador = new SerializadorErro(res.getHeader("Content-Type"));

    res.status(status).send(
        serializador.serializar({
            mensagem: err.mensagem,
            idErro: err.idErro,
        })
    );
});

app.listen(config.get("api.porta"), () =>
    console.log(`A API esta funcionando na porta ${config.get("api.porta")}!`)
);
