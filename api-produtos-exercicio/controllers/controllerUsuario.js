const Usuarios = require("../models").User;
const bcrypt = require("bcrypt");
const { cpf } = require("cpf-cnpj-validator");

module.exports = {
    cadastrarUsuario(req, res, next) {
        if (cpf.isValid(req.body.documento)) {
            return Usuarios.create({
                nome: req.body.nome,
                email: req.body.email,
                senha: req.body.senha,
                documento: req.body.documento,
            })
                .then((usuario) => res.status(201).send(usuario))
                .catch((err) =>
                    res
                        .status(400)
                        .send("Usuario não pode ser cadastrado! ", err)
                );
        }
        return res.status(400).send("Documento inválido!");
    },
};
