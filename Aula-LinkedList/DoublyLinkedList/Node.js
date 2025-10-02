class Node {
  constructor(value) {
    this.value = value;
    this.next = undefined; // Próximo nó (Next node)
    this.prev = undefined; // Nó anterior (Previous node)
  }
}

module.exports = Node;