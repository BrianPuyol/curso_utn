
function allParrafo() {

    const all = document.getElementsByTagName('p');
    //console.log(all) //llamo todas las p en la consola

    const num = all.length; //creo la const 'num' usando 'all' que previamente dije que eran todos los parrafos

    console.log(num)

    alert(`Hay ${num} elementos p dentro de este documento`) //el "onclick" llama a esta funcion //interpolacion de string

}

//allParrafo() //tengo que ponerlo para marcar que existe, sin esto no aparece en consola

//-------------------------------------------------------------------------------------//

function caja1P() { // una funcion llamar solamente los elementos de la caja azul

    const caja1 = document.getElementById('caja1') //seleccione todo lo que hay en la caja
    console.log(caja1)

    const caja1p = caja1.getElementsByTagName('p') //seleccione todas las p
    console.log(caja1p)

    const num = caja1p.length; //creo una variable con el length de la variable "caja1p"
    console.log(num); //5 //puedo repetir variable ya que es otra función

    alert(`Hay ${num} elementos p dentro de la caja azul`) //el "onclick" llama a esta funcion

}

function caja2P() {

    const caja2 = document.getElementById('caja2') //separar las 2 ids
    console.log(caja2)

    const caja2p = caja2.getElementsByTagName('p')
    console.log(caja2p)

    const num = caja2p.length
    console.log(num)

    alert(`Hay ${num} elementos p dentro de la caja rojo`)

}
