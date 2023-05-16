function revenda(carro){
    switch(carro){
        case 'hatch': return console.log("Compra efetuada com sucesso");    
        case 'sedan': return console.log("Tem certeza que não prefere este modelo?");    
        case 'motocicleta': return console.log("Tem certeza que não prefere este modelo?");   
        case 'caminhonete': return console.log("Tem certeza que não prefere este modelo?");   
        default: return console.log("Não trabalhamos com este tipo de automóvel aqui");    
    }
}

revenda('hatch');
revenda('sedan');
revenda('caminhonete');
revenda('caminhão');