/**
 * Conta a frequência de palavras em uma frase usando a estrutura Map.
 * @param {string} frase A frase de entrada.
 * @returns {Map<string, number>} Um Map com a palavra e sua contagem.
 */
function contarPalavras(frase) {
    const contagemMap = new Map();

    // 1. Remove pontuações e converte para minúsculas
    // 2. Divide a string em um array de palavras usando espaços
    const palavras = frase
        .toLowerCase()
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
        .split(/\s+/); // Divide por um ou mais espaços

    for (const palavra of palavras) {
        if (palavra === "") continue; // Ignora entradas vazias

        // Verifica se a palavra já está no Map
        if (contagemMap.has(palavra)) {
            // Se sim, incrementa o valor atual
            const contagemAtual = contagemMap.get(palavra);
            contagemMap.set(palavra, contagemAtual + 1);
        } else {
            // Se não, adiciona a palavra com contagem 1
            contagemMap.set(palavra, 1);
        }
    }

    return contagemMap;
}

const texto = "O Map é mais rápido, é usado para contagem, Map e Map.";
const resultadoPalavras = contarPalavras(texto);

console.log("\n--- Exercício 5: Contagem de Palavras com Map ---");
console.log(resultadoPalavras);