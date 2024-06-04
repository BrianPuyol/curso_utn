const items = document.getElementsByClassName('item')

console.log(items)

function cambiarVisibilidad(numItem){

    const item = items[numItem] //array

    if(item.style.visibility == '') { //actualmente no hay nada
        item.style.visibility = 'hidden'; //lo ocultas
    } else {
        item.style.visibility = ''; //actualmente no hay nada
    }

}

function cambiarDisplay(numItem){

    const item = items[numItem]

    if(item.style.display == '') {
        item.style.display = 'none';
    } else {
        item.style.display = '';
    }

}

