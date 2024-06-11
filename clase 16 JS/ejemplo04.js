const parrafo = document.getElementById('parrafo')
const menos = document.getElementById('menos')
const mas = document.getElementById('mas')

menos.addEventListener('click', function(){ //no hace falta "e" porque no llamas a evento
    parrafo.style.fontSize = '10px' //ya de por si se llama a parrafo

})

mas.addEventListener('click', function(){
    parrafo.style.fontSize = '30px'
    
})

// por que no se usa la "e"? porque no llamas a eventos
// quien actuaria de "e"? nadie

// por que fontSize está todo junto y no como en el css?
// del lado izquierdo: va todo junto
// del lado derecho: como lo hacemos en css