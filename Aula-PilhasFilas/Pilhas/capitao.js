const MinhaPilha = require('./MinhaPilha');

const bau = new MinhaPilha;

// Adicionando tesouros e verificando o topo
bau.adicionar("Colar de Ouro");
bau.adicionar("Coroa");
bau.adicionar("Rubi");
console.log(bau.topo());

// Removendo ultimo tesouro
bau.remover();

// Verificando o tesouro que está no topo
console.log(bau.topo());

// Verificando se não há mais tesouro no baú
console.log(bau.estaVazia());