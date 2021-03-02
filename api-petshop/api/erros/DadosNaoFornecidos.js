class DadosNaoFornecidos extends Error {
    constructor() {
        super("Nao foram fornecidos dados para atualizar");
        this.name = "dados nao fornecidos";
        this.idErro = 2;
    }
}

module.exports = DadosNaoFornecidos;
