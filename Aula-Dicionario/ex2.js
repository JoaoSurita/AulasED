// 2) Implemente uma função para contagem de caracteres
function contarCaracteres(texto) {
    const contagem = {};

    // 1. Converte a string para minúsculas para contagem não sensível a maiúsculas/minúsculas
    // 2. Remove espaços em branco (ignora os espaços)
    const textoLimpo = texto.toLowerCase().replace(/\s/g, '');

    // Itera sobre cada caractere do texto limpo
    for (const caractere of textoLimpo) {
        // Verifica se a chave (caractere) já existe no objeto
        if (contagem[caractere]) {
            // Se existir, incrementa a contagem
            contagem[caractere]++;
        } else {
            // Se não existir, inicializa a contagem com 1
            contagem[caractere] = 1;
        }
    }

    return contagem;
}

const frase = "Olá Mundo, Este é um teste";
const resultadoContagem = contarCaracteres(frase);

console.log("\n--- Exercício 2: Contagem de Caracteres ---");
console.log(`Frase: "${frase}"`);
console.log(resultadoContagem);
// Exemplo de saída: { o: 2, l: 1, a: 1, m: 1, u: 1, n: 1, d: 1, e: 3, s: 2, t: 2, é: 1 }