function validarForm() {
    const nombreValido = true; //que alguien escriba algo
    const passWordValido = validarLargo(document.form.text1.value, 5); //llama a la funcion de la linea 13

    const resultado = nombreValido && passWordValido;
    if (resultado) {
        alert('ES VÁLIDO')
    } else {
        alert('NOOOOO ES VÁLIDO')
    }
}

function validarLargo(texto, largoRequerido) { //texto = document.form.text1.value
    return texto.length >= largoRequerido      //largoRequerido
}

