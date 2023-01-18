const numeros = [0, 122, 4, 6, 7, 8, 44];

const verificaPar = numeros.every(x => x % 2 === 0);

verificaPar ? console.log('Array válido') : console.log('Array inválido');