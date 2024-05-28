let x = 1;
const cuantos = 5; //El único que no se modifica, hace el tope
let suma = 0;

while(x <= cuantos){
    const valor = parseInt(prompt(`Ingrese el valor ${x} de ${cuantos}`));
    suma += valor; //suma continuamente el resultado
    x++ //permite que de la vuelta
}

document.write (`La suma de los valores es ${suma}`);