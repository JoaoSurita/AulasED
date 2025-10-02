const Fila = require('./Fila');

const impressora = new Fila();

impressora.adicionarDocumento("Relatório Financeiro", 10);
impressora.adicionarDocumento("Trabalho de História", 5);
impressora.adicionarDocumento("Foto de Viagem", 2);
impressora.adicionarDocumento("Currículo", 1);
impressora.adicionarDocumento("Artigo Científico", 12);

// Tentando adicionar além da capacidade
impressora.adicionarDocumento("Livro de Receitas", 20); // Deve mostrar fila cheia

// Iniciando a impressão
impressora.imprimirFila();