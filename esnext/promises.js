function falarDeposDe(segundos,frase){
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve(frase);
        },segundos * 1000);
    });
}

falarDeposDe(3,'Que legal!')
    .then((frase) => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase));
