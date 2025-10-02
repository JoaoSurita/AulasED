const Fila = require('./Fila');

const brinquedo = new Fila();

brinquedo.adicionarVisitante("Ana");
brinquedo.adicionarVisitante("Carlos");
brinquedo.adicionarVisitante("Beatriz", true); // VIP
brinquedo.adicionarVisitante("Eduardo");
brinquedo.adicionarVisitante("Fernanda", true); // VIP

brinquedo.simularEmbarque();