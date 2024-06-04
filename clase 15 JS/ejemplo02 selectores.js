
const items = document.getElementsByClassName('items') //llamo todas las clases
console.log(items)

for(let i=0; i < items.length; i++){ //arranca desde el indice cero, hasta el maximo de la longitud, y que vaya incrementado // for = recorrer

    items[i].style = 'color:blue; padding-left: ' + (10*i) + 'px';
}