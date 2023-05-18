const pilotos = ['Vettel', 'Alonso', 'Raikkonen',' massa'];
pilotos.pop();
console.log(pilotos);

pilotos.push('Verstappen');
console.log(pilotos);

pilotos.shift()// remove primeiro
console.log(pilotos);

// splice pode adicionar e remover elementos

//adicionar 
pilotos.splice(2,0,'Bottas','Massas');
console.log(pilotos);

//remover
pilotos.splice(3,1);
console.log(pilotos);

const algunsPolotos1 = pilotos.slice(2)// novo array
console.log(algunsPolotos1);

const algunsPolotos2 = pilotos.slice(1,4)// 4 não entra
console.log(algunsPolotos2);

