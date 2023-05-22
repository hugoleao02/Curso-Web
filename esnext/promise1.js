const primeiroElmento = string =>string[0];
const primeiraLetra = string => string[0];
const letraMinuscula = letra => letra.toLowerCase();

new Promise(resolve => {
    resolve(['Ana', 'Bia', 'Carlos ', 'Daniel']);
}).then(primeiroElmento)
    .then(primeiraLetra)
    .then(letraMinuscula)
    .then(console.log);