const nombre = prompt('Escribir tu nombre', '')
let edad = NaN //let porque va haber un if/else/while
while (isNaN(edad)) {//while inicia un bucle hasta que se ponga un numero
    edad = parseInt(prompt('Escribir tu edad', ''))//pide poner un numero
    if (isNaN(edad)) {//si no pones un numero, vuelve al inicio
        alert(`Por favor, ingresa un número válido`)
    }
}

if (edad > 18) { //si es mayor de 18
    alert(`Hola! ${nombre} me complace informarte que tenés ${edad} años y que podes conducir`)
} else { //si no lo es
    alert(`Hola! ${nombre} lamento informarte que tenés ${edad} años y que no podes conducir, volvé cuando seas mayor, perro`)
}

const mensajeFinal = edad
console.log(mensajeFinal)
