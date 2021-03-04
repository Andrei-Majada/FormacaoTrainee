const User = require("../models").User;
const bcrypt = require("bcrypt");
const { cpf } = require("cpf-cnpj-validator");

module.exports = {
    index(req, res, next) {
        return res.status(200).json({
            msg: "OK",
        });
    },
};
