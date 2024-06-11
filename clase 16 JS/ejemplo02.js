const link = document.getElementById('link')

link.addEventListener('click', function(e){ //el 'e' mismo que el currentTarget
    e.preventDefault(); //frena la condicion natural de algo, en este caso, el link
    alert('Quisiste ir a: ' + e.currentTarget.href) //currentTarget: Href
}) 