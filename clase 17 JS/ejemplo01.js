const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const pares = numeros.filter(num => num % 2 === 0) 
//"filter" filtra entre diferentes datos
//"===" comparación estricta, tipo y valor

// => arrow function, señala la funcion especifica, a esa funcion le pasa lo siguiente: es lo mismo que poner {}
//function (a, b){return a + b + 100
//(a, b) => a + b + 100 (tenes que tener una base previa)


// el operador resto devuelve de la division entre 2 numeros

console.log(numeros)
console.log(pares)
