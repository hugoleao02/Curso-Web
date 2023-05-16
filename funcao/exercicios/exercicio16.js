function calculadora(a, b, operacao) {
    switch (operacao) {
        case '+': return console.log(a + b);
        case '-': return console.log(a - b);
        case '*': return console.log(a * b);
        case '/': return console.log(a / b);
    }
}

calculadora(2,5,'+');
calculadora(2,5,'-');
calculadora(2,5,'*');
calculadora(2,5,'/');