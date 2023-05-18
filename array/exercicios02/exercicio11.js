function receberPrimeiroEUltimoElemento(elementos) {
    const primeiroElemento = elementos.shift()
    const ultimoElemento = elementos.pop()
    return [primeiroElemento, ultimoElemento]
}

const array = [10, 'hU',25,-56];

console.log(receberPrimeiroEUltimoElemento(array));
