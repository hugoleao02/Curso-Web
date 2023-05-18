function somarNumeros(numeros){
    return numeros.reduce((acumulador, numero) => acumulador + numero, 0); 
}

console.log(somarNumeros([10,10,10]));
console.log(somarNumeros([11,15,40]));