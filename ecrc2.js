class Estoque {
    constructor() {
        this.quantidade = 0;
    }

    adicionar(quantidade) {
        this.quantidade += quantidade;
    }

    remover(quantidade) {
        try {
            if (this.quantidade - quantidade < 0) {
                throw new Error("Quantidade insuficiente no estoque!");
            }
            this.quantidade -= quantidade;
        } catch (erro) {
            console.error(erro.message);
        }
    }
}

const estoque1 = new Estoque();
estoque1.adicionar(10);
estoque1.remover(5);
estoque1.remover(10);  // Mostra erro