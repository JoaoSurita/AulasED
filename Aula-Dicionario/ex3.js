// 3) Crie um objeto para armazenar informações de produtos
const produtos = {
    "P001": { nome: "Laptop Gamer", preco: 5500.00 },
    "P002": { nome: "Mouse Óptico", preco: 45.90 },
    "P003": { nome: "Teclado Mecânico", preco: 210.50 },
    "P004": { nome: "Webcam Simples", preco: 35.00 },
    "P005": { nome: "Monitor 4K", preco: 1200.00 }
};

console.log("\n--- Exercício 3: Produtos acima de R$ 50 ---");

// Itera sobre as chaves (códigos dos produtos)
for (const codigo in produtos) {
    const produto = produtos[codigo];
    const preco = produto.preco;
    
    // Verifica a condição: preço acima de R$ 50
    if (preco > 50.00) {
        console.log(`Código: ${codigo} - Nome: ${produto.nome} - Preço: R$ ${preco.toFixed(2)}`);
    }
}