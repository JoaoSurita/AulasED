const LinkedList = require('./LinkedList');

const poderes = new LinkedList();

// Adiciona poderes no início e no fim
poderes.insertAtBeginning("Super Salto");
poderes.insertAtEnd("Raio Congelante");
poderes.insertAtEnd("Escudo de Fogo");
poderes.insertAtEnd("Invisibilidade");
poderes.toString();

// Remove o poder "Raio Congelante"
poderes.removeByValue("Raio Congelante");
poderes.toString();

// Verifica se "Escudo de Fogo" está disponível
const escudo = poderes.find("Escudo de Fogo");
console.log('Escudo de Fogo está disponível?', escudo !== undefined);