class Fila {
    #items = [];
    #inicio = 0;
    #fim = 0;
    #capacidade = 5;

    enqueue(elemento) {
        this.#items[this.#fim] = elemento;
        this.#fim++;
    }
    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }

        const item = this.#items[this.#inicio];

        delete this.#items[this.#inicio];

        this.#inicio++;

        if (this.#inicio === this.#fim) {
            this.#inicio = 0;
            this.#fim = 0;
        }

        return item;
    }
    front() {
        if (this.isEmpty()) {
            return undefined;
        }

        return this.#items[this.#inicio];
    }
    clear() {
        this.#items = [];
        this.#inicio = 0;
        this.#fim = 0;
    }
    isEmpty = () => this.#inicio === this.#fim;
    size = () => this.#fim - this.#inicio;

    // Exercicio 2
    adicionarDocumento(nome, paginas) {
        if (this.size() >= this.#capacidade) {
            console.log(`Fila cheia! Não é possível adicionar "${nome}".`);
        } else {
            this.enqueue({ nome, paginas });
            console.log(`Documento "${nome}" (${paginas} páginas) adicionado à fila.`);
        }
    }

    imprimirFila() {
        const self = this;
        function processar() {
            if (!self.isEmpty()) {
                const doc = self.dequeue();
                console.log(`Imprimindo: "${doc.nome}" (${doc.paginas} páginas)...`);
                setTimeout(processar, 1500);
            } else {
                console.log("Todos os documentos foram impressos!");
            }
        }
        processar();
    }

    // Exercicio 3
    adicionarVisitante(nome, vip = false) {
        const visitante = { nome, vip };
        // Se for VIP, insere no início da fila (logo após o início atual)
        if (vip) {
            // Move todos para frente e coloca o VIP logo após o início
            for (let i = this.#fim; i > this.#inicio; i--) {
                this.#items[i] = this.#items[i - 1];
            }
            this.#items[this.#inicio] = visitante;
            this.#fim++;
            console.log(`Visitante VIP "${nome}" entrou na fila com prioridade!`);
        } else {
            this.enqueue(visitante);
            console.log(`Visitante "${nome}" entrou na fila.`);
        }
    }

    simularEmbarque() {
        const self = this;
        function embarcar() {
            if (!self.isEmpty()) {
                const visitante = self.dequeue();
                console.log(`Embarcando: ${visitante.vip ? "[VIP] " : ""}${visitante.nome}`);
                setTimeout(embarcar, 2000); // 2 segundos por embarque
            } else {
                console.log("Todos os visitantes embarcaram e desembarcaram!");
            }
        }
        embarcar();
    }

    // Exercicio 4
    adicionarPedido(numero, nome, tempoPreparo = 2000) {
        this.enqueue({ numero, nome, tempoPreparo });
        console.log(`Pedido ${numero}: "${nome}" adicionado à fila (tempo de preparo: ${tempoPreparo / 1000}s).`);
    }

    prepararPedidos() {
        const self = this;
        function preparar() {
            if (!self.isEmpty()) {
                const pedido = self.dequeue();
                console.log(`Preparando Pedido ${pedido.numero}: "${pedido.nome}"...`);
                setTimeout(function () {
                    console.log(`Pedido ${pedido.numero}: "${pedido.nome}" pronto!`);
                    preparar();
                }, pedido.tempoPreparo);
            } else {
                console.log("Todos os pedidos foram preparados!");
            }
        }
        preparar();
    }

    // Exercicio 5
    adicionarCliente(nome, produtos) {
        this.enqueue({ nome, produtos });
        console.log(`Cliente "${nome}" entrou na fila com ${produtos} produtos.`);
    }

    atenderClientes() {
        const self = this;
        function atender() {
            if (!self.isEmpty()) {
                const cliente = self.dequeue();
                const tempo = cliente.produtos * 1000; // 1 segundo por produto
                console.log(`Atendendo ${cliente.nome} (${cliente.produtos} produtos)...`);
                setTimeout(atender, tempo);
            } else {
                console.log("Todos os clientes foram atendidos!");
            }
        }
        atender();
    }
}

module.exports = Fila;