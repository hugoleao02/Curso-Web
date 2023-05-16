function cardapio(codigo, quantidade) {
    switch (codigo) {
        case 100:
            return console.log(`${quantidade} Cachorro Quente valor à pagar: ${quantidade * 3.00}`);
        case 200:
            return console.log(`${quantidade} Hambúrguer Simples valor à pagar: ${quantidade * 4.00}`);
        case 300:
            return console.log(`${quantidade} Cheeseburguer valor à pagar: ${quantidade * 5.50}`);
        case 400:
            return console.log(`${quantidade} Bauru valor à pagar: ${quantidade * 7.50}`);
        case 500:
            return console.log(`${quantidade} Refrigerante  valor à pagar: ${quantidade * 3.50}`);
        case 600:
            return console.log(`${quantidade} Suco  valor à pagar: ${quantidade * 1.80}`);
        default: return console.log('Produto não existe!');
    }
}

cardapio(100,5);
cardapio(200,2);
cardapio(700,2);