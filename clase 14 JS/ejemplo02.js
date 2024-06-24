const valor = parseInt(prompt('Ingrese un valor comprendido entre 1 y 5', ''));

switch (valor) { //Si es para proponer diferentes casos
    case 1:
        document.write('hola soy el número 1')
        break; //da el cierre 
    case 2:
        document.write('hola soy el número 2')
        break;
    case 3:
        document.write('hola soy el número 3')
        break;
    case 4:
        document.write('hola soy el número 4')
        break;
    case 5:
        document.write('hola soy el número 5')
        break;

    default: //Si no pusiste algo de los anteriores mando este texto
        document.write('debe ingresar a un número comprendido entre 1 y 5')
        break;
}

