class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar() {
        console.log(`Olá, me chamo ${this.nome} e tenho ${this.idade} anos!`);
    }
}

module.exports = Pessoa;