const Fila = require('./Fila');

const caixa = new Fila();

// Adicionando clientes com número aleatório de produtos
caixa.adicionarCliente("João", Math.floor(Math.random() * 10) + 1);
caixa.adicionarCliente("Maria", Math.floor(Math.random() * 10) + 1);
caixa.adicionarCliente("Carlos", Math.floor(Math.random() * 10) + 1);
caixa.adicionarCliente("Ana", Math.floor(Math.random() * 10) + 1);

caixa.atenderClientes();