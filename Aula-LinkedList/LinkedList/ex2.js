const LinkedList = require('./LinkedList');

const filaTartarugas = new LinkedList();

filaTartarugas.insertAtBeginning("Tartaruga 1");
filaTartarugas.insertAtEnd("Tartaruga 2");
filaTartarugas.insertAtEnd("Lenta");
filaTartarugas.insertAtEnd("Tartaruga 3");
filaTartarugas.insertAtEnd("Tartaruga 4");
filaTartarugas.toString();

// Remover "Lenta"
filaTartarugas.removeByValue("Lenta");
filaTartarugas.toString();

// Inserir "Veloz" na posição 2
filaTartarugas.insertAtPosition("Veloz", 2);
filaTartarugas.toString();

// Encontrar posição da "Veloz"
let pos = 0;
let current = filaTartarugas.find("Veloz");
if (current) {
    let aux = filaTartarugas.getHead();
    while (aux !== current) {
        pos++;
        aux = aux.next;
    }
    console.log("Veloz está na posição:", pos);
}