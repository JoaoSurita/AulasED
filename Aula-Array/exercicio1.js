const MeuArray = require("./MeuArray.js");

const tarefas = new MeuArray();

tarefas.adicionar("Elaborar relatório de desempenho mensal");
tarefas.adicionar("Preparar apresentação para reunião estratégica");
tarefas.adicionar("Analisar indicadores de vendas do trimestre");
tarefas.adicionar("Agendar reunião com o time de marketing");
tarefas.adicionar("Atualizar o cronograma do projeto em andamento");

console.log("Tarefa removida:", tarefas.remover());

console.log("Lista de tarefas:");
for (let i = 0; i < tarefas.tamanhoArray(); i++) {
    console.log(tarefas.obterElemento(i));
}

console.log(tarefas.obterElemento(6))