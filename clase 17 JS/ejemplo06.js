const persona = { //las "," son necesarias al dar varia info
    nombre:'Flavia',
    edad:42,
    esEstudiante:true,
    hobbies:[ // "[]" indices de hobbies
        'bailar',
        'cantar',
        'nadar',
    ]
}

console.log(persona.nombre) //dentro de "persona", el "nombre"
console.log(persona.hobbies) //dentro de "persona", TODOS los "hobbies"
console.log(persona.hobbies.length) //dentro de "persona", cantidad de "hobbies" (length)
console.log(persona.nombre.toUpperCase()) //dentro de "persona", el "nombre" en mayúscula