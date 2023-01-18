const palavras = ['livro', 'caneta', 'sol', 'carro', 'orelha'];

const maiorNumero = palavras.some(x => x.length > 5);


if (maiorNumero) {
    console.log('Existe palavra inválida');
} else {
    console.log('Array validado');
}