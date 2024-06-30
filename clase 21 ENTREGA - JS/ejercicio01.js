const nombre = prompt('Ingrese su nombre', '')
let distancia = NaN
while (isNaN(distancia)) {
    distancia = parseInt(prompt('Ingrese distancia a recorrer en metros', ''))
    if (isNaN(distancia)) {
        alert(`Por favor, ingrese una distancia a recorrer en números`)
    }
}

if (distancia > 0 && distancia <= 1000) {
    alert(`Hola ${nombre}, ya que ingresaste ${distancia} metros, te recomendamos que vayas caminando ya que no es muy lejos y ahorras en transporte!`)
} else if (distancia > 1001 && distancia <= 10000) {
    alert(`Hola ${nombre}, ya que ingresaste ${distancia} metros, te recomendamos que utilices bicicleta ya que no es muy lejos, además haces ejercicio!`)
} else if (distancia > 10001 && distancia <= 30000) {
    alert(`Hola ${nombre}, ya que ingresaste ${distancia} metros, te recomendamos que cargues la "sube" ya que ir en colectivo sería lo más óptimo.`)
} else if (distancia > 30001 && distancia <= 100000) {
    alert(`Hola ${nombre}, ya que ingresaste ${distancia} metros, te recomendamos que tengas tengas nafta en el auto o que pidas un "uber" ya que es una distancia considerable para ir por otro medio.`)
} else if (distancia > 100001) { //podría ir solo "else", y va sin condición
    alert(`Hola ${nombre}, ya que ingresaste ${distancia} metros, te recomendamos que saques pasaje de avión con antelación, ya que es una distancia imposible de recorrer por otro medio.`)
}