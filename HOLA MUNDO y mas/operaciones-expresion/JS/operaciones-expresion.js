const suma = function(pnumeroUno, pnumeroDos) {
    let sumar;
    numeroUno = pnumeroUno;
    numeroDos = pnumeroDos;
    sumar = numeroUno + numeroDos;
    return sumar;
}

const resta = function(pnumero1, pnumero2) {
    let resta;
    numeroUno = pnumero1;
    numeroDos = pnumero2;
    resta = numeroUno - numeroDos;
    return resta;
}

const multiplicaciones = function(pnumero1, pnumero2) {
    let multiplicacion;
    numeroUno = pnumero1;
    numeroDos = pnumero2;
    multiplicacion = numeroUno * numeroDos;
    return multiplicacion;
}

const divisiones = function(pnumero1, pnumero2) {
    let division;
    numeroUno = pnumero1;
    numeroDos = pnumero2;
    division = numeroUno / numeroDos;
    return division;
}

console.log("El resultado de la resta es de :"+resta(2, 2));
console.log("El resultado de la multiplicacion es de :"+multiplicaciones(2, 2));
console.log("El resultado de la division es de :"+divisiones(2, 2));
