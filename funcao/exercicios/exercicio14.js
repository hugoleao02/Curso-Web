function frutas(fruta){
    switch(fruta){
        case 'maçã': return console.log("Não vendemos esta fruta aqui!.");
        case 'kiwi': return console.log('Estamos com escassez de kiwi!.');
        case 'melancia': return console.log('Aqui está 3 reais o quilo!.');
        default: return console.log("Fruta inválida!.");
    }
}

frutas('maçã');
frutas('kiwi');
frutas('melancia');
frutas('tufa');
