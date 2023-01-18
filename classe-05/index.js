const palavras = ["arroz", "feijão", "carne", "cerveja", "macarrão"];

const procurarPalavras = palavras.some(x => x === 'cerveja' || x === 'vodka');


procurarPalavras ? console.log('Revise sua lista, João. Possui bebida com venda proibida!') : console.log('Tudo certo, vamos as compras!');