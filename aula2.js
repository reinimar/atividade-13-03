let carro = {
    rodas: 4,
    portas: 4,
    cor: "vermelho",
    motor: "vs",
    volante: "couro preto tipo cobra",
    andar: function () {
        console.log("o carro esta andando");
    },
    buzinar: function(){
    console.log("BIIIIII BIIII");
    }
};
console.log(carro.motor);
console.log(`A cor do carro e ${carro.cor} e o motor e ${carro.motor}`);
carro.cor = "azul"
console.log(`A cor do carro e ${carro.cor} e o motor e ${carro.motor}`);
carro.chassi = "070568930687834"; //adicionado um chassi
console.log(`A cor do carro e ${carro.cor} e o motor e ${carro.chassi}`);
delete carro.volante; //deletando o atributo volante 
console.log(carro); 

console.log(carro.andar());
carro.buzinar();