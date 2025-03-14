class Carro {
    constructor(modelo, cor, ano) {
        this.modelo = modelo;
        this.cor = cor;
        this.ano = ano;
    }

    mostrarDetalhes() {
        return `Modelo: ${this.modelo}, Cor: ${this.cor}, Ano: ${this.ano}`;
    }
}


const carro1 = new Carro("Civic", "Preto", 2022);
console.log(carro1.mostrarDetalhes());