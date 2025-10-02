const LinkedList = require('./LinkedList');
const lista = new LinkedList();

// A
lista.insertAtEnd("A");
lista.insertAtEnd("B");
lista.insertAtEnd("C");
lista.toString(); // A -> B -> C -> undefined

lista.removeByValue("B");
lista.toString(); // A -> C -> undefined

lista.removeByValue("A");
lista.toString(); // C -> undefined

// B
const resultadoBuscaC = lista.find("C");
console.log("Achou C?", resultadoBuscaC !== undefined);

const resultadoBuscaX = lista.find("X");
console.log("Achou X?", resultadoBuscaX !== undefined);