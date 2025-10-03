// 7.1) Função Object para Map
/**
 * Converte um objeto JavaScript simples para um Map.
 * @param {Object} obj O objeto de entrada.
 * @returns {Map} O Map resultante.
 */
function objectToMap(obj) {
    // A maneira mais direta e moderna em JavaScript
    return new Map(Object.entries(obj));
}

// 7.2) Função Map para Object
/**
 * Converte um Map JavaScript para um objeto simples (dicionário).
 * @param {Map} map O Map de entrada.
 * @returns {Object} O objeto (dicionário) resultante.
 */
function mapToObject(map) {
    // Usa o método Object.fromEntries(), que transforma um array de [chave, valor] em um objeto
    return Object.fromEntries(map);
}

const meuObjeto = { id: 101, status: 'ativo', data: '2025' };
const meuMap = new Map([
    ["cor", "vermelho"],
    ["tamanho", 42],
    ["estoque", true]
]);

console.log("\n--- Exercício 7: Conversão Object <-> Map ---");

// Conversão Objeto para Map
const mapConvertido = objectToMap(meuObjeto);
console.log("Objeto -> Map:", mapConvertido);

// Conversão Map para Objeto
const objConvertido = mapToObject(meuMap);
console.log("Map -> Objeto:", objConvertido);