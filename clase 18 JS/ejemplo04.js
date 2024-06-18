let a, b, resto;

[a, b] = [10, 20]; //forma más resumida el destructuring

console.log(a) //imprime 10
console.log(b) //imprime 20
//--------------------------------------------------------------------------------//
//[a, b, ...resto] = [10, 20, 30, 40, 50];

console.log(resto); //imprime 30, 40, 50
//--------------------------------------------------------------------------------//
const vocales = ['a','e','i']

console.log(vocales) //imprime: a, e, i
//--------------------------------------------------------------------------------//
const vocalesCompletas = [...vocales, 'o', 'u']

console.log(vocalesCompletas) //imprime: a, e, i, o, u (...vocales=a,e,i)