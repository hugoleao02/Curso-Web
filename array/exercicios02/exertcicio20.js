function menorNumero(numeros){
    return numeros.reduce((anterior, atual) => anterior < atual ? anterior: atual)
}

console.log(menorNumero([10, 5, 35, 65]));
console.log(menorNumero([5, -15, 50, 3]));