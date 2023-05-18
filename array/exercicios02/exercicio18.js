function calcularMedia(numeros){
    const quantidadeDeNumeros = numeros.length;
    const somaTotal = numeros.reduce((numeroA, numeroB) => numeroA + numeroB);

    return somaTotal / quantidadeDeNumeros;
}

console.log(calcularMedia([10,15]));
console.log(calcularMedia([5,6,7]));