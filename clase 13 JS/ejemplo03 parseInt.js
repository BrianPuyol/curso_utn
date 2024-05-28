const valor1 = prompt('Ingrese primer número', '') //10
//const valor1 = parseInt(prompt('Ingrese primer número', '')) //Lo declaras acá y no despues
const valor2 = prompt('Ingrese segundo número', '') //15
//Lo tomó como texto en vez de número porque no se puso "string" en la constante

/*--------------------------------------------------------------------------------------*/

const suma = valor1 + valor2; //10+15 literal
const suma2 = parseInt(valor1) + parseInt(valor2);
//"parseInt" sirve para declarar NÚMEROS //el "+" sirve para concatenar, el "*" no

const producto = valor1 * valor2; //no hay problema en esta

console.log(suma); //'1015' en vez de 25
console.log(suma2); //25
console.log(producto); //150


