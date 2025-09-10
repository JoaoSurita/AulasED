const MeuArray = require("./MeuArray")

const meuArray = new MeuArray();
meuArray.adicionar(5);
meuArray.adicionar(10);
meuArray.adicionar(15);
meuArray.remover();
meuArray.adicionar(20);

console.log(meuArray.obterElemento(1));
console.log(meuArray.tamanhoArray());