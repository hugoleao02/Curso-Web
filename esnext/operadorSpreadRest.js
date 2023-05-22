const funcionario = {nome: 'Maria', salario: 12345.99};
const clone = {ativo: true, ...funcionario};
console.log(clone);

const grupoA = ['João', 'Pedro', 'Glória'];
console.log(grupoA);
const grupoFinal = ['Maria', ...grupoA, 'Lima'];
console.log(grupoFinal);