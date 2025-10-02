const ContaBancaria = require('./ContaBancaria');

const Conta1 = new ContaBancaria(100)

Conta1.depositar(100)
Conta1.sacar(10)
Conta1.verSaldo()