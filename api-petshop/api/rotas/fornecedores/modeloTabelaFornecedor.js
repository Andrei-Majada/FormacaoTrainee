const Sequelize = require("sequelize");

const instancia = require("../../banco-de-dados");

const colunas = {
  empresa: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  categpria: {
    type: Sequelize.ENUM("ração", "brinquedos"),
    allowNull: false,
  },
};

const opcoes = {
  freezeTableName: true,
  tableName: "fornecedores",
  timestamps: true,
  createdAt: "data criação",
  updatedAt: "data atualização",
  version: "versao",
};

module.exports = instancia.define("fornecedores", colunas, opcoes);
