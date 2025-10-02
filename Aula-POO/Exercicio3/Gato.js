const Animal = require('./Animal');

class Gato extends Animal {
    constructor(nome) {
        super(nome)
    }
    falar() {
        console.log(`${this.nome}, a gata, faz: Miau!`)
    }
}

module.exports = Gato