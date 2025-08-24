const Gerente = require('./Gerente');
const Desenvolvedor = require('./Desenvolvedor');

const ger = new Gerente("Carlos", 5000)
const dev = new Desenvolvedor("João", 4000)

console.log(`Bônus do Gerente: ${ger.calcularBonus()}`)
console.log(`Bônus do Desenvolvedor: ${dev.calcularBonus()}`)