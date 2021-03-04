const express = require("express");
const { index } = require("../controllers/controllerProdutos");
//routes
module.exports = (app) => {
    app.get("/", index); //index
};
