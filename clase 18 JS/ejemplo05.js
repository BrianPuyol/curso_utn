//now = new Date()
//alert(now)

//const dia = new Date()
//const hours = dia.getHours()

//console.log(hours)
//---------------------------------------------------------------------------//
const nombre = prompt('Escribir tu nombre', '')
//se podría hacer una funcion pero usar "if" y "else" en este caso es mas fácil
const today = new Date()

const hrs = today.getHours() //"get.Hours" ver librerias, hay muchos tipos

console.log(hrs)

if (hrs < 12) {
    document.write('Buenos dias ' + nombre + '!!')
    console.log(`Buenos dias ${nombre} !!`)
} else if (hrs >= 12 && hrs <= 19) {
    document.write('Buenos tardes ' + nombre + '!!')
    console.log(`Buenos tardes ${nombre} !!`)
} else {
    document.write('Buenos noches ' + nombre + '!!')
    console.log(`Buenos noches ${nombre} !!`)
}