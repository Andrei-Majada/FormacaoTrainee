const Sequelize = require("sequelize");
const { lt } = Sequelize.Op;

const Produtos = require("../models").Products;
const Categorias = require("../models").Category;

module.exports = {
    index(req, res, next) {
        return res.status(200).json({
            msg: "OK",
        });
    },

    async criarProduto(req, res, next) {
        return Produtos.create({
            nome: req.body.nome,
            preco: req.body.preco,
            categoria: req.body.categoria,
        })
            .then((produto) => {
                res.status(201).send(produto);
            })
            .catch((err) => res.status(400).send(err));
    },

    async editarProduto(req, res, next) {
        Produtos.findOne({
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
            .catch((err) => res.status(400).send("Produto não encontrado!"));
    },

    async deletarProduto(req, res, next) {
        Produtos.findOne({
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

    async listarProdutos(req, res, next) {
        return Produtos.findAll({})
            .then((produto) => res.status(302).send(produto))
            .catch((err) => res.status(400).send("Nenhum produto encontrado!"));
    },

    async criarCategoria(req, res, next) {
        return Categorias.create({
            nome: req.body.nome,
            status: req.body.status,
        })
            .then((categoria) => {
                res.status(201).send(categoria);
            })
            .catch((err) => res.status(400).send(err));
    },

    async ListarProdutosNome(req, res, next) {
        Produtos.findOne({
            where: {
                nome: req.params.nomeProduto,
            },
        })
            .then((produto) => {
                if (produto == null) {
                    return res.status(400).send("Produto não encontrado!");
                }
                return res.status(302).send(produto);
            })
            .catch((err) => res.status(404).send(err));
    },

    async ListarProdutosAtivos(req, res, next) {
        Categorias.findAll({
            where: {
                status: true,
            },
            include: [
                {
                    all: true,
                    as: "Produtos",
                    where: {
                        preco: {
                            [lt]: 10,
                        },
                    },
                },
            ],
            order: [["nome", "ASC"]],
        })
            .then((resultados) => {
                return res.status(302).send(resultados);
            })
            .catch((err) => res.status(400).send(err));
    },
};
