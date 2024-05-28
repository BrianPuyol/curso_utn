const frutas =['Bananas', 'Manzana', 'Pera', 'palta']; //0,1,2,3

const numeros =[12,26,59,48,78];

console.log(frutas)
console.log(numeros)

console.log(frutas.length) //devuelve la cantidad de elementos (4) 
                           //cantidad (0,1,2,3) =/= largo (4)

//Ejemplo Array
console.log(frutas[0]) //Bananas

const ultimo = frutas[frutas.length-1] //frutas.length(0,1,2,3=4) - 1 = 3(palta) 
console.log(ultimo);

const meses = ['Enero'] //siempre el "-1" el los arrays