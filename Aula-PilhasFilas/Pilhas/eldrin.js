const MinhaPilha = require('./MinhaPilha');

const livros = new MinhaPilha;

// Adicionando feitiços e verificando o topo
livros.adicionar("Expelliarmus");
livros.adicionar("Expecto Patronum");
livros.adicionar("Sectumsempra");
console.log(livros.topo());

// Removendo ultimo feitiço
livros.remover();

// Verificando o feitiço que está no topo
console.log(livros.topo());

// Verificando se não há mais feitiço na pilha
console.log(livros.estaVazia());