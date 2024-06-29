function salario(pdias, pvdia) {
    let vdia = pvdia;
    let totalSalario = pdias * vdia;
    return totalSalario;
}


function salud(pdias, pvdia) {
    let pagoSalud = salario(pdias, pvdia) * 0.12;
    return pagoSalud;
}

function pension(pdias, pvdia) {
    let pagoPension = salario(pdias, pvdia) * 0.16;
    return pagoPension;
}

function arl  (pdias, pvdia) {
    let pagoARL;
   pagoARL = salario(pdias, pvdia) * 0.052;
    return pagoPension;
}


function deducible(pdias, pvdia) {
    let pagoDeducible = salud(pdias, pvdia) - pension(pdias, pvdia);
    return pagoDeducible;
}

function subTrans(pdias, pvdia) {
    let salarioMinimo = 1600000;
    let salarioTrans = salario(pdias, pvdia);
    let subTransporte;

    if (salarioTrans <= 2 * salarioMinimo) {
        subTransporte = 114000;
    } else {
        subTransporte = 0;
    }

    return subTransporte;
}
function pagoTotal(pdias,pvdia){
    let pagoSueldo;
    pagoSueldo=salario(pdias,pvdia)-deducible(pdias,pvdia)+subTrans(pdias,pvdia);
return pagoSueldo;
}

let pvdia = 100000; 
let pdias = 20;

let totalSalario = salario(pvdia, pdias);
let subTransporte   = subTrans(pvdia,pdias);
let pagoSalud = salud(pvdia, pdias);
let pagoPension = pension(pvdia, pdias);
let pagoArl = arl(pvdia, pdias);
let pagoDeducible = deducible(pvdia, pdias);
let sueldoFinal = pagoTotal(pvdia, pdias);

console.log("El salario de la persona es de: $" + totalSalario);
console.log("El subsidio de transporte  de la persona es de: $" + subTransporte);
console.log("El pago de salud es de: $" + pagoSalud);
console.log("El pago de pensión es de: $" + pagoPension);
console.log("El pago de ARL es de: $" + pagoArl);
console.log("El total de descuentos es de: $" + pagoDeducible);
console.log("El sueldo final después de descuentos es de: $" + sueldoFinal);