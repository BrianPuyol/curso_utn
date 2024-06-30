const numeros = [1646, 844, 726, 91, 184];
let numeroMayor = numeros[0]; 

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] > numeroMayor) {
    numeroMayor = numeros[i];
  }
}

//console.log(`El número mayor de los siguientes números: ${numeros}, es ${numeroMayor}`)
document.write('El número mayor es ' + numeroMayor + '!');