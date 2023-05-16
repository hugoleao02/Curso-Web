function tratarErroLancar(erro){
    throw new Error('...');
}

function imprimirNomeGritado(pbj){
    try{
    console.log(obj.name.toUpperCase() + '!!!');
    } catch(e){
        tratarErroLancar(e);
    }finally{
        console.log('Final');
    }
}

const obj = { nome: 'Roberto'};
imprimirNomeGritado(obj);