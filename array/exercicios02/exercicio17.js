function despesasTotais(itens) {
    return itens.map(item => item.preco).reduce((acc, valor) => acc + valor, 0);
}

console.log(despesasTotais([
    { nome: "Jornal online", categoria: "Informação", preco: 89.99 },
    { nome: "Cinema", categoria: "Entretenimento", preco: 150 }
]));
console.log(despesasTotais([
    {nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99},
    {nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90}
]));