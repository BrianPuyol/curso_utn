const formulario = document.getElementById('formulario') //Selecciono

formulario.addEventListener('submit', function(e){ //Submit/Enviar

    e.preventDefault(); //Freno el envio

    if(e.currentTarget.nombre.value == '') {  //Si lo que yo escribo es igual a "vacio"
        alert('El campo nombre es requerido'); //Pide que se escriba algo si está "vacio"
        return //Sino lo manda // "==" iguala, no asigna
    } 

    if(e.currentTarget.nombre.value == '') {
        alert('El campo mensaje es requerido');
        return
    }

    alert(`Gracias ${e.currentTarget.nombre.value} por enviarnos el siguiente mensaje: ${e.currentTarget.nombre.value}`)


})