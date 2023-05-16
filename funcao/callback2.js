const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0];

//sem callback
let notasbaixas1 = [];
for (let i in notas) {
    if (notas[i] < 7) {
        notasbaixas1.push(notas[i]);
    }
}

console.log(notasbaixas1);

// com callback
const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
});

const notaMenorQue7 = nota => nota < 7;
const notasBaixas3 = notas.filter(notaMenorQue7);
console.log(notasBaixas3);