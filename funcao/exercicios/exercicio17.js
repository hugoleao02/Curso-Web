function salario(plano, salario) {
    switch (plano) {
        case 'a': return console.log(salario * 1.1);
        case 'b': return console.log(salario * 1.15);
        case 'c': return console.log(salario * 1.20);
        default: return console.log('Plano inválido');
    }
}

salario('a',1200);
salario('b',1200);
salario('c',1200);
salario('d',1200);