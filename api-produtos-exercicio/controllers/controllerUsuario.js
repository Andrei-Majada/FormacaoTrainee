const bcrypt = require("bcrypt");
const { cpf } = require("cpf-cnpj-validator");

const Usuarios = require("../models").User;
const salt = 13;

module.exports = {
    cadastrarUsuario(req, res, next) {
        if (cpf.isValid(req.body.documento)) {
            return Usuarios.create({
                nome: req.body.nome,
                email: req.body.email,
                senha: req.body.senha,
                senha: bcrypt.hashSync(req.body.senha, salt),
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

    logarUsuario(req, res, next) {
        if (req.body.email && req.body.senha) {
        }
    },

    deslogarUsuario(req, res, next) {},
};
