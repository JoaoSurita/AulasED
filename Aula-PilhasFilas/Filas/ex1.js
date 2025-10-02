const Fila = require('./Fila');

const fila = new Fila();

// Clientes chegando...
fila.enqueue("Cliente 1");
fila.enqueue("Cliente 2");
fila.enqueue("Cliente 3");
fila.enqueue("Cliente 4");
fila.enqueue("Cliente 5");

// Utilizando o setTimeout
function atenderFila(fila) {
    if (!fila.isEmpty()) {
        const atendido = fila.dequeue();
        console.log("Atendido:", atendido);
        setTimeout(function() {
            atenderFila(fila);
        }, 2000);
    } else {
        console.log("Todos foram atendidos!");
    }
}

atenderFila(fila);
