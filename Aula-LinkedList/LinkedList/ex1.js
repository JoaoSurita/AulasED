const LinkedList = require('./LinkedList');

const trilha = new LinkedList();

// Inserir pontos no início e no fim
trilha.insertAtBeginning("Cachoeira");
trilha.insertAtEnd("Caverna");
trilha.insertAtEnd("Mirante");
trilha.toString(); // Exibe a trilha

// Remover um local perigoso
trilha.removeByValue("Caverna");
trilha.toString(); // Exibe a trilha após remoção

// Verificar se o mirante ainda faz parte da trilha
const mirante = trilha.find("Mirante");
console.log("Mirante faz parte da trilha?", mirante !== undefined);

// Verificar se a caverna ainda faz parte da trilha
const caverna = trilha.find("Caverna");
console.log("Caverna faz parte da trilha?", caverna !== undefined);