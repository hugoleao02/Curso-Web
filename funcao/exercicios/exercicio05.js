function format(a,b){
    const soma = a + b;
    return console.log(`R$ ${soma.toFixed(2).replace('.',',')}`);
}

format(0.1,0.2);