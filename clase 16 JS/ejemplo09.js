const numeros = [1,23,45,65,36,25]

const dobles = numeros.map(function(num){
    return num*2 //devuelve la const "numeros" por 3
})

const triple = numeros.map(function(num){
    return num*3
})

console.log(numeros)

console.log(dobles)

console.log(triple)