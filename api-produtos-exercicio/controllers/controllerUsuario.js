const bcrypt = require("bcrypt");
const { cpf } = require("cpf-cnpj-validator");
const jwt = require("jsonwebtoken");

const Usuarios = require("../models").User;
const salt = 10;

function geraToken(usuario) {
    return jwt.sign(
        {
            nome: usuario.nome,
            email: usuario.email,
        },
        process.env.tokenKey,
        {
            expiresIn: "3h",
        }
    );
}

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

    async logarUsuario(req, res, next) {
        if (req.body.email && req.body.senha) {
            await Usuarios.findOne({
                where: {
                    email: req.body.email,
                },
            })
                .then(async (usuario) => {
                    const senha = await bcrypt.compare(
                        req.body.senha,
                        usuario.senha
                    );

                    if (!senha) {
                        return res.status(400).send("Senha incorreta!");
                    }

                    const bearer = "Bearer ".concat(geraToken(usuario));

                    return res.status(200).send(bearer);
                })
                .catch((err) => res.status(400).send(err));
        }
    },

    deslogarUsuario(req, res, next) {},
};
