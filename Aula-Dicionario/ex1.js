// 1) Crie um objeto para armazenar informações de alunos
const alunos = {
    // Adicione pelo menos 3 alunos
    "12345": "Ana Silva",
    "67890": "Bruno Mendes",
    "11223": "Carla Oliveira"
};

console.log("--- Exercício 1: Lista de Alunos ---");

// Itere sobre as chaves (números de matrícula) para exibir os nomes
for (const matricula in alunos) {
    // O valor (nome do aluno) é acessado usando a chave (matricula)
    const nome = alunos[matricula];
    console.log(`Matrícula: ${matricula}, Nome: ${nome}`);
}