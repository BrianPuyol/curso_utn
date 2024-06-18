function getNameDias(mes) {

    // "NaN" significa "not a number"
    // Si no es un número, falla
    if (Number.isNaN(mes)) return false

    // Un número menor a 1 o mayor a 12 no hay mes
    if (mes < 1 || mes > 12) return false

    mes-- // ej:22 ----- 12-1 = posicion 11 (diciembre)


    const data = [
        {
            nombre: 'Enero', //pos 0
            dias: 31
        },
        {
            nombre: 'Febrero', //pos 1
            dias: 28
        },
        {
            nombre: 'Marzo', //pos 2
            dias: 31
        },
        {
            nombre: 'Abril',
            dias: 30
        },
        {
            nombre: 'Mayo',
            dias: 31
        },
        {
            nombre: 'Junio',
            dias: 30
        },
        {
            nombre: 'Julio',
            dias: 31
        },
        {
            nombre: 'Agosto',
            dias: 30
        },
        {
            nombre: 'Septiembre',
            dias: 31
        },
        {
            nombre: 'Octubre',
            dias: 30
        },
        {
            nombre: 'Noviembre',
            dias: 31
        },
        {
            nombre: 'Diciembre',
            dias: 30
        },

    ]

    return data[mes]
} // cierra la funcion

const numMes = parseInt(prompt('Ingrese el mes del año en múmeros', ''))

const resultado = getNameDias(numMes)

if (resultado) {
    alert(`El mes ${resultado.nombre} tiene ${resultado.dias} días`) // "`" string
} else {
    alert('Mes inválido') // " '' porque no hay interpolacion de string"
}