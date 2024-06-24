const frutas =['manzana', 'bananas', 'palta', 'pera']

console.log(frutas);
// document.write(frutas);
console.log(frutas[1])


for(let i = 0; i < frutas.length; i++){ //Arranca el indice desde 0
                                        //El tope del indice va ser su length
                                        //Actualiza el indice y suma 1 más
    console.log('Tenemos ' + frutas [i]);
    document.write('Tenemos ' + frutas [i] + "<br/>");
}
 

