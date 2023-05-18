const pessoa = {nome: 'João'};
pessoa.nome = 'Pedro';
console.log(pessoa);

Object.freeze(pessoa); 
pessoa.nome = 'Maria'; // continua Pedro
pessoa.end = 'Rua ABC'; // não adiciona atributo
delete pessoa.nome // não deleta

console.log(pessoa);

const pessoaConstante = Object.freeze({nome: 'João'});
pessoaConstante.nome = 'Maria';
console.log(pessoaConstante);