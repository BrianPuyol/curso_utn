//Programar un contador de caracteres para un textarea.

//evento, lenght

document.addEventListener("DOMContentLoaded", function() {
    const textarea = document.getElementById('texto');
    const contador = document.getElementById('contador');

    textarea.addEventListener('input', function() {
        const caracteres = textarea.value.length;
        contador.textContent = 'Caracteres: ' + caracteres;
    });
});