const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2];
const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"];


//Questão a
numeros.sort((a, b) => a - b);
console.log(numeros);

//Questão b
numeros.sort((a, b) => b - a);
console.log(numeros);

//Questão c
numeros.sort();
console.log(numeros);

//Questão d
frutas.sort((a, b) => a.localeCompare(b));
console.log(frutas);

//Questão e
frutas.sort((a, b) => b.localeCompare(a));
console.log(frutas);

//Questão f
frutas.sort((a, b) => a.length - b.length);
console.log(frutas);