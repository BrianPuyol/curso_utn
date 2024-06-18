const empleados = [
    {
        nombre: 'Flavia',
        trabajo: 'desarrollador'
    },
    {
        nombre: 'Laura',
        trabajo: 'abogado'
    },
    {
        nombre: 'Daniela',
        trabajo: 'maestro'
    },
    {
        nombre: 'Cecilia',
        trabajo: 'desarrollador'
    },
    {
        nombre: 'Jere',
        trabajo: 'maestro'
    },
    {
        nombre: 'Leonel',
        trabajo: 'veterinario'
    }
]

const desarrolladores = empleados.filter(
    empleado => empleado.trabajo == 'desarrollador'
) // usar "==" para igualar // usar "==" para asignar

console.log(desarrolladores)

const nodesarrolladores = empleados.filter(
    empleado => empleado.trabajo !== 'desarrollador'
) // "!==" diferente a 

console.log(nodesarrolladores)