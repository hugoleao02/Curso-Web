function inverso(valor){
    const tipo = typeof valor;

    if(tipo == "boolean"){
        return !valor;
    }else if(tipo == "number"){
        return -valor;
    }else {
        return console.log("booleano ou númerico esperado, mas o parâmetro e do tipo string");
    }
}

console.log(inverso(-12));