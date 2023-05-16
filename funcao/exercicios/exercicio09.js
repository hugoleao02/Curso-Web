function classifcacaoDoAluno(nota){
    let notaCorrigida = arredondar(nota);
    if( notaCorrigida >= 40){
        return console.log(`Aprovado com nota: ${notaCorrigida}`);
    }else{
        return console.log(`Reprovado com nota: ${notaCorrigida}`);
    }
}

function arredondar(nota){
    if(nota % 5 > 2){
        return nota + (5 -(nota % 5));
    }else{
        return nota;
    }
}


classifcacaoDoAluno(100);
classifcacaoDoAluno(30);
classifcacaoDoAluno(38);
classifcacaoDoAluno(29);
classifcacaoDoAluno(88);
classifcacaoDoAluno(61);



