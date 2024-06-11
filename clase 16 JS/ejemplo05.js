const alternar = document.getElementsByClassName('alternar')[0]
//el unico que existe, azul

console.log(alternar)
alternar.addEventListener('click', function(e) {
    e.currentTarget.classList.toggle('activo') 
})

//classList: lista de clases asignadas, clase alternar (html) y activo (css)
//toggle: prende o apaga / add o remove