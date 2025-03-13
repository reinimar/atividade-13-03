
class Produto {
    constructor(nome, preco, desconto) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }

    calcularPrecoComDesconto() {
        try {
            if (this.desconto > 100) {
                throw new Error("Desconto não pode ser maior que 100%");
            }
            return this.preco * (1 - this.desconto / 100);
        } catch (erro) {
            console.error(erro.message);
            return this.preco;
        }
    }
}

const produto1 = new Produto("Notebook", 3000, 20);
console.log(produto1.calcularPrecoComDesconto());  // 2400