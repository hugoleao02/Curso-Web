function repetir(valor, repetir){
    const resultado = [];

    for(let i = 0; i < repetir; i++){
        resultado.push(valor);
    }
    return resultado;
}

console.log(repetir(7,3));
console.log(repetir("Opa",5));