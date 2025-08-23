const Cliente = require('./Cliente')
const Endereco = require('./Endereco')

const end = new Endereco("José da Silva", "Barra Bonita")
const cliente = new Cliente("João Pedro", end)

cliente.MostrarDados()