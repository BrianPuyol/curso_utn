const alumnos = [
    {
        nombre: 'Flavia',
        edad: 3
    },
    {
        nombre: 'Pablo',
        edad: 7
    },
    {
        nombre: 'Leo',
        edad: 9
    },
    {
        nombre: 'Laura',
        edad: 2
    },
    {
        nombre: 'Sandra',
        edad: 4
    },
    {
        nombre: 'Pedro',
        edad: 12
    },
]

//const chicosmenores = alumnos.filter(alumno => alumno.edad <= 4) 
//console.log(chicosmenores)

const chicos = alumnos.filter(alumno => alumno.edad >= 4)
console.log(chicos)


for (let i = 0; i < chicos.length; i++) { //creo el bucle para que recorre 
    //const ya declarada
    document.write(`<li> Niño: ${chicos[i].nombre}, cuya edad es ${chicos[i].edad} </li>`) //selecciono los indices correspondiente con interpolacion de string "${}"
}