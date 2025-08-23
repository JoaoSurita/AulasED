class ContaBancaria {
    constructor(saldo) {
        this._saldo = saldo
    }
    depositar(valor) {
        this._saldo += valor
    }
    sacar(valor) {
        this._saldo -= valor
    }
    verSaldo() {
        console.log(`Saldo atual: ${this._saldo}`)
    }
}

module.exports = ContaBancaria