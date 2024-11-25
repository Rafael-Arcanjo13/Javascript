function cripto(text) {
    const alfabeto = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H','I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

    text = text.toUpperCase()
    const indices = [];

    for(i of text) {
        let caracter = alfabeto.indexOf(i) + 1;
        indices.push(caracter)
    }

    return indices
}

const criptografia = cripto('Rafael')
console.log(criptografia)