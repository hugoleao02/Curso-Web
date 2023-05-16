// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro:'Rua abc',
        numero: 1000
    }
}

const {nome, idade } = pessoa;
console.log(nome,pessoa);

const {nome: n , idade: i } = pessoa;
console.log(n,i);

const {sobrenome, bemHumerada = true} = pessoa;
console.log(sobrenome, bemHumerada);

const {endereco:{logradouro, numero, cep} } = pessoa;
console.log(logradouro, numero, cep);

const {conta : { af, num }} = pessoa;
console.log(ag, num);