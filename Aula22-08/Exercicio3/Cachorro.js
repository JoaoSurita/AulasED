const Animal = require('./Animal');

class Cachorro extends Animal {
    constructor(nome) {
        super(nome)
    }
    falar() {
        console.log(`${this.nome}, o cachorro, faz: Au Au!`)
    }
}

module.exports = Cachorro