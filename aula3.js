class Carro{
    constructor(rodas, portas, volante, cor, motor){
       this.rodas = rodas ;
       this.portas = portas;
       this.volante = volante;
        this.cor = cor;
        this.motor = motor;

    }
    buzinar(){
        console.log("BIIIIII BIIIII AAAA");
    }
}
let carroJoao = new Carro(4, 4, "preto de couro igual cobra", "vermelho", "v8");
let carroPatricia = new Carro (4,2,"rosa de pom bem fofinho", "branco", "v6");
console.log(`o carro do joao tem, ${carroJoao.rodas} rodas, ${carroJoao.portas} 
portas, o volante e ${carroJoao.volante}, a cor do carro e ${carroJoao.cor}
 e o motor e ${carroJoao.motor}`);
 carroJoao.buzinar();

