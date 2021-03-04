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

    editarProduto(req, res, next) {
        Products.findOne({
            where: {
                id: req.params.idProduto,
            },
        })
            .then((produto) => {
                produto.nome = req.body.nome;
                produto.preco = req.body.preco;
                produto.categoria = req.body.categoria;
                produto.save();
                res.status(200).send(produto);
            })
            .catch((err) => res.status(404).send(err));
    },

    deletarProduto(req, res, next) {
        Products.findOne({
            where: {
                id: req.params.idProduto,
            },
        })
            .then((produto) => {
                if (produto == null) {
                    return res.status(400).send("Produto não encontrado!");
                }

                produto.destroy();

                return res.status(200).send("Produto excluído com sucesso!");
            })
            .catch((err) => res.status(404).send(err));
    },
};
