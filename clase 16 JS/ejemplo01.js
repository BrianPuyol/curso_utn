const boton2 = document.getElementById('boton')

boton2.addEventListener('click', function (e) { // La 'e' hace referencia al evento
    alert(e.currentTarget.innerText) // El currentTarget te muestra el contenido: ineerText
})