
class ContaBancaria {
    constructor(saldo = 0) {
        this.saldo = saldo;
    }

    depositar(valor) {
        this.saldo += valor;
    }

    sacar(valor) {
        try {
            if (valor > this.saldo) {
                throw new Error("Saldo insuficiente!");
            }
            this.saldo -= valor;
        } catch (erro) {
            console.error(erro.message);
        }
    }
}

const conta1 = new ContaBancaria(500);
conta1.sacar(200);
conta1.sacar(400);  // Mostra erro