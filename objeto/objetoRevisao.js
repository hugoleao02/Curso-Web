// coleção dinâmica de pare chave/valor
const produto = new Object;
produto.nome = 'Cadeira';
produto['marca do produto'] = 'Generica';
console.log(produto);

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }],
    calculaSeguro: function(){}
}

carro.proprietario.endereco.numero = '1000';


console.log(carro);

delete carro.condutores;
delete carro.proprietario.endereco;
delete carro.calculaSeguro;
console.log(carro);
console.log(carro.condutores); // CUIDADO!!!
