function classificacaoTriangulo(lado1, lado2, lado3){
    if(lado1 === lado2 && lado2 === lado3 && lado1 === lado3){
        return console.log('Equilátero');
    }else if(lado1 === lado2 || lado3 == lado1 || lado2 == lado3){
        return console.log('Isósceles');
    }else{
        return console.log('Escaleno');
    }
}


classificacaoTriangulo(4,4,4);
classificacaoTriangulo(4,4,2);
classificacaoTriangulo(2,4,2);
classificacaoTriangulo(1,2,2);
classificacaoTriangulo(1,3,2);