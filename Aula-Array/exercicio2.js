const MeuArray = require("./MeuArray.js");

const participantes = new MeuArray();

participantes.adicionar("Carlos");
participantes.adicionar("Ana");
participantes.adicionar("Roberto");
participantes.adicionar("Fernanda");

console.log("Terceiro participante:", participantes.obterElemento(2));

participantes.limpar();

console.log("Tentando acessar após limpar:", participantes.obterElemento(0));