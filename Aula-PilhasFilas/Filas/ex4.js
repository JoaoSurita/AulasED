const Fila = require('./Fila');

const restaurante = new Fila();

restaurante.adicionarPedido(1, "Hambúrguer", 3000);
restaurante.adicionarPedido(2, "Pizza", 5000);
restaurante.adicionarPedido(3, "Salada", 2000);
restaurante.adicionarPedido(4, "Batata Frita", 2500);

restaurante.prepararPedidos();