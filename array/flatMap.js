const escola = [
    {
        nome: 'Turma M1',
        alunos: [{
            nome: 'Gustavo',
            nota: 8.1
        }, {
            nome: 'Ana',
            nota: 9.3
        }]
    }, {
        nome: 'Turma M2',
        alunos: [{
            nome: 'Rebeca',
            nota: 8.9
        }, {
            nome: 'Roberto',
            nota: 7.3
        }]
    }
]

const getNOtaDoAluno  = aluno => aluno.nota;
const getNotasDaTurma = turma => turma.alunos.map(getNOtaDoAluno);

const notas1 = escola.map(getNotasDaTurma);
console.log(notas1);

console.log([].concat([ 8.1, 9.3 ], [ 8.9, 7.3 ]));


Array.prototypeflatMap = function(calback){
    return Array.prototype.concat.apply([], this.map(calback));
}

const notas2 = escola.flatMap(getNotasDaTurma);
console.log(notas2);