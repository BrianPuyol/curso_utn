function ocultarMensaje(){

    const mensaje = document.getElementById('mensaje') //selecciono el elemento

    mensaje.style.display = 'none' //lo oculto
}

//ocultarMensaje()

setTimeout(ocultarMensaje, 5000)