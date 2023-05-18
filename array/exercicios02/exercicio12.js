function removerPropriedade(obj, nomePropriedade) {
    const copia = { ...obj };
    delete copia[nomePropriedade];

    return console.log(copia);
}


removerPropriedade({ a: 1, b: 2 }, "a");
removerPropriedade(
    {
        id: 30,
        nome: "Caneta",
        descricao: "Não preenchido"
    }, "descricao");