class MinhaPilha {
    #items = [];
    #tamanho = 0;

    adicionar(elemento) {
        this.#items[this.#tamanho] = elemento;
        this.#tamanho++;
    }

    remover() {
        if (this.#tamanho === 0) {
            return undefined;
        }

        const ultimoItem = this.#items[this.#tamanho - 1];

        delete this.#items[this.#tamanho - 1];

        this.#tamanho--;

        return ultimoItem;
    }
    topo() {
        if (this.#tamanho === 0) {
            return undefined;
        }

        return this.#items[this.#tamanho - 1];
    }
    limpar() {
        this.#items = [];
        this.#tamanho = 0;
    }

    estaVazia = () => this.#tamanho === 0;

    tamanhoPilha = () => this.#tamanho;
}

module.exports = MinhaPilha