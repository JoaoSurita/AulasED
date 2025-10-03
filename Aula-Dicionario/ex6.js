/**
 * Conta a frequência de letras, mantendo a diferença entre maiúsculas e minúsculas.
 * @param {string} texto A string de entrada.
 * @returns {Map<string, number>} Um Map com a letra e sua contagem.
 */
function contarLetrasCaseSensitive(texto) {
    const contagemMap = new Map();

    // Remove espaços e itera sobre cada caractere
    const letras = texto.replace(/\s/g, '');

    for (const letra of letras) {
        // Se a letra já está no Map
        if (contagemMap.has(letra)) {
            contagemMap.set(letra, contagemMap.get(letra) + 1);
        } else {
            // Se a letra for nova
            contagemMap.set(letra, 1);
        }
    }

    return contagemMap;
}

const palavraMista = "JavaScript";
const resultadoLetras = contarLetrasCaseSensitive(palavraMista);

console.log("\n--- Exercício 6: Contagem de Letras (Case-Sensitive) com Map ---");
console.log(resultadoLetras);
// Saída esperada: Map(8) { 'J' => 1, 'a' => 2, 'v' => 1, 'S' => 1, 'c' => 1, 'r' => 1, 'i' => 1, 'p' => 1, 't' => 1 }