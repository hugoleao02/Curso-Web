// closure é o escopo criado quando uma função e declarada
// esse escopo permite a função acessar e manipular variáveis externas á função

const x = 'Global';

function fora(){
    const x = 'Local';
    function dentro(){
        return x;
    }
    return dentro;
}

const minhaFuncao = fora();
console.log(minhaFuncao());