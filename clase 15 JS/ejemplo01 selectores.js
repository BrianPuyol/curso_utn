const parrafo = document.querySelector('.destacados'); //llamo la primera coincidencia de la clase

console.log(parrafo);

const parrafos = document.querySelectorAll('.destacados'); //llamo todas las coincidencias de la clase

console.log(parrafos)

const parr = document.querySelectorAll('.p') //llamo todas las etiquetas "p"

console.log(parr)

//-------------------------------------------------------------------------------------//

const primero = document.getElementById('primero')

primero.style = 'background:red';

console.log(primero) //llama solamente una id, ya que solo puede haber una