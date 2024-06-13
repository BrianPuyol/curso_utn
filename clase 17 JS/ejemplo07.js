const datosUsuarios = [ // "[]" indice para las diferentes personas
    {
        nombre: "Flavia",
        password: "1234"
    },
    {
        nombre: "Laura",
        password: "5678"
    },
    {
        nombre: "Sandra",
        password: "2589"
    },
    {
        nombre: "Virginia",
        password: "74369"
    },
    {
        nombre: "Clara",
        password: "69744"
    },
]

console.log(datosUsuarios)

const soloPassword = datosUsuarios.map(function(p){ //creas funcion "p"
    return p.password // devuelve "p" + password
})

console.log(soloPassword)