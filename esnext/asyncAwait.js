//com promise
const http = require('http');

const getTurma = (letra) =>{
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;
    return new Promise((resolve, reject )=>{
        http.get(url,res =>{
            let resultado = '';
    
            res.on('data', dados =>{
                resultado += dados;
            });
    
            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado));
                } catch (error) {
                    reject(error);
                }
            });
        });
    });
}

let nomes = [];

getTurma('A').then(alunos => {
nomes = nomes.concat(alunos.map((a => `A: ${a.nome}`)));
    getTurma('B').then(alunos => {
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`));
        getTurma('C').then(alunos =>{
            nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`));
            console.log(nomes);
        });
    });
});

let obterAlunos = async () => {
    const ta = await getTurma('A');
    const tb = await getTurma('B');
    const tc = await getTurma('C');
    return [].concat(ta,tb,tc);
}

obterAlunos()
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes));