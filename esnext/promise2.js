// setTimeout(() => {
//     console.log('Executando callback...');

//     setTimeout(() => {
//         console.log('Executando callback2...');
//         setTimeout(() => {
//             console.log('Executando callback3...');
//         }, 2000);
//     }, 2000);

// }, 2000);

function esperarPor(tempo = 2000){
    return new Promise((resolve) =>{
        setTimeout(()=>{
            console.log('Executando promise...');
            resolve('Vish');
        }, tempo);
    });
}

esperarPor()
    .then(() => esperarPor())
    .then(esperarPor);