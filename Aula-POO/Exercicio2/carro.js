class Carro {
    constructor(modelo, ano, velocidade) {
        this.modelo = modelo
        this.ano = ano
        this.velocidade = velocidade
    }

    acelerar() {
        this.velocidade += 10;
        console.log(`O carro ${this.modelo}, ano ${this.ano}, está a ${this.velocidade}km/h`)
    }

    frear() {
        this.velocidade -= 5;
        console.log(`O carro ${this.modelo}, ano ${this.ano}, freou e está a ${this.velocidade}km/h`)
    }
}

module.exports = Carro