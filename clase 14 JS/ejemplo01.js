const nombre = prompt('Ingrese su nombre', '')
const nota = parseInt(prompt('Ingrese su nombre', ''))

console.log(nombre);
console.log(nota);

if(Number.isNaN(nota)){ //NaN (not a number)
    document.write(`La nota ingresada no es válida`)
} else if(nota >=4){ //Si nota es mayor o igual que 4 estás aprobado
    document.write(`${nombre} estás aprobada/o con un ${nota}`);
    document.log(`${nombre} estás aprobada/o con un ${nota}`);
} else{ //Sino estás aprobado
    document.write(`${nombre} estás deaprobada/o con un ${nota}`);
    document.log(`${nombre} estás aprobada/o con un ${nota}`);
}