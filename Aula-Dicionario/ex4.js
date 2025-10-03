/**
 * Remove chaves de um objeto (dicionário) cujo valor seja null ou undefined.
 * @param {Object} dicionario O objeto a ser limpo.
 * @returns {Object} O objeto original, modificado.
 */

function removerNulosEIndefinidos(dicionario) {
    for (const chave in dicionario) {
        // Verifica se a chave pertence ao próprio objeto (e não à cadeia de protótipos)
        if (dicionario.hasOwnProperty(chave)) {
            const valor = dicionario[chave];

            // Verifica se o valor é estritamente null ou undefined
            if (valor === null || valor === undefined) {
                delete dicionario[chave]; // Remove a chave do objeto
            }
        }
    }
    return dicionario;
}

const dadosSujos = {
    nome: "João",
    idade: 30,
    email: null,
    telefone: undefined,
    endereco: "Rua X",
    CEP: null
};

console.log("--- Exercício 4: Remover Nulos/Indefinidos ---");
console.log("Antes:", dadosSujos);
const dadosLimpos = removerNulosEIndefinidos(dadosSujos);
console.log("Depois:", dadosLimpos);