const nombre = 'Flavia'
const edad = 42

console.log(`Hola! ${nombre} así que vos tenés ${edad}`)

const edad1 = 18
const edad2 = 32

const edad3 = parseInt(prompt('Ingrese una edad' , '')) //Ingresa una edad y la compara

const mensaje1 = `La cuota para personas de ${edad1} es de ${edad1 >= 21 ? 5000:3500}`
//primero compara si 18 es mayor o igual que 21, si es así 5000 sino 3500 

const mensaje2 = `La cuota para personas de ${edad2} es de ${edad2 >= 21 ? 5000:3500}`
//primero compara si 32 es mayor o igual que 21, si es así 5000

const mensaje3 = `La cuota para personas de ${edad3} es de ${edad3 >= 21 ? 5000:3500}`

console.log(mensaje1)
console.log(mensaje2)
console.log(mensaje3)