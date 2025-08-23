class Cliente {
    constructor(nome, endereco) {
        this.nome = nome
        this.endereco = endereco
    }
    MostrarDados() {
        console.log(`${this.nome}, mora na Rua ${this.endereco.rua}, na cidade de ${this.endereco.cidade}.`)
    }
}

module.exports = Cliente;