class Animal {
    constructor(nome, especie, idade) {
        this.nome = nome;
        this.especie = especie;
        this.idade = idade;
    }

    fazerSom() {
        const sons = {
            vaca: "Muuuuu",
            cachorro: "Au au",
            gato: "Miau",
            elefante: "Brrrr",
        };
        return sons[this.especie] || "Som não identificado";
    }
}


const animal1 = new Animal("Rex", "cachorro", 3);
console.log(animal1.fazerSom());  // "Au au"