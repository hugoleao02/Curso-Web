function bissexto(ano) {
    if (ano % 100 == 0) {
        return false;
    } else if (ano % 4 == 0 || ano % 400 == 0) {
        return true;
    }else{
        return false;;
    }
}

console.log(bissexto(2020));
console.log(bissexto(2021));
console.log(bissexto(2022));
console.log(bissexto(2023));
console.log(bissexto(2024));
console.log(bissexto(2025));