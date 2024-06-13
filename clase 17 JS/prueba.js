//COMO LO HICE -----------------------------------

//const num = [56, 34, 78, 3, 23];

//const numaz = num.sort();

//console.log(numaz)

//console.log(`num de menor a mayor ` + num.sort()).

//COMO ES ----------------------------------------

const numeros = [56, 34, 78, 3, 23, 5]

const numerosordenados = numeros.sort(function(a, b){
    return a - b //"a" y "b" para comparar, puede ser cualquier letra
})

console.log(numerosordenados) // de menor a mayor

const numerosordenadosreves = numeros.sort(function(a, b){
    return b - a
})

console.log(numerosordenadosreves) //de mayor a menor


