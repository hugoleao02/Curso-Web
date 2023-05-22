//ES8: Object.values/Object.entries
const obj = {a:1, b:2, c:3};
console.log(Object.values(obj));
console.log(Object.entries(obj));

//Melhorias na Notação literal
const nome = 'Carla';
const pessoa = {
    nome,
    ola(){
        return 'Oi gente!';
    }
}

//class
class Animal {};
class Cachorro extends Anima{
    falar(){
        return'Auau';
    }
}

console.log(new Cachorro().falar());