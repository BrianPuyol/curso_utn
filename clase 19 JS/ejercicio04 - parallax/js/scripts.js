$(document).ready(function () { // cuando está preparando el documento
    $window = $(window); // como llama jquery al elemento

    $('#intro').height($window.height()); // intro es la primera imágen > alto
    $window.scroll(function () { // tengo en cuenta el movim del scroll en los otros 3 dic con la clase background > each es por cada elemento
        $('div.background').each(function (index, item) {// llamo al div con clase background > "each" llamo a aca una
            const $scroll = $(item);
            const yPos = -($window.scrollTop() / $scroll.data('speed')); // - eje coordenadas - es para arriba y segunda la velocidad decladara se va moviendo
            const coords = '50%' + yPos + 'px'; // x > 50% y la posicion sale dinamicamente según valor/ velocidad (data-speed)
            $scroll.css({ backgroundPosition: coords }); // se lo aplico por css

        }) // fin de la tercera función
    }) // fin de la segunda funcion

}) // fin de la función