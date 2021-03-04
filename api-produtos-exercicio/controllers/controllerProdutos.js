const Products = require("../models").Products;

module.exports = {
    index(req, res, next) {
        return res.status(200).json({
            msg: "OK",
        });
    },

    criarProduto(req, res, next) {
        return Products.create({
            nome: req.body.nome,
            preco: req.body.preco,
            categoria: req.body.categoria,
        })
            .then((produto) => {
                res.status(201).send(produto);
            })
            .catch((err) => res.status(400).send(err));
    },
};
