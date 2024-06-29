const salario = function(pdias, pvdia) {
    let totalSalario = pdias * pvdia;
    return totalSalario;
}

const salud = function(pdias, pvdia) {
    let pagoSalud = salario(pdias, pvdia) * 0.12;
    return pagoSalud;
}

const pension = function(pdias, pvdia) {
    let pagoPension = salario(pdias, pvdia) * 0.16;
    return pagoPension;
}

const arl = function(pdias, pvdia) {
    let pagoARL = salario(pdias, pvdia) * 0.052;
    return pagoARL;
}

const deducible = function(pdias, pvdia) {
    let pagoDeducible = salud(pdias, pvdia) + pension(pdias, pvdia) + arl(pdias, pvdia);
    return pagoDeducible;
}

const subTrans = function(pdias, pvdia) {
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

const pagoTotal = function(pdias, pvdia) {
    let pagoSueldo = salario(pdias, pvdia) - deducible(pdias, pvdia) + subTrans(pdias, pvdia);
    return pagoSueldo;
}

let pvdia = 100000; 
let pdias = 20;

let totalSalario = salario(pdias, pvdia);
let subTransporte = subTrans(pdias, pvdia);
let pagoSalud = salud(pdias, pvdia);
let pagoPension = pension(pdias, pvdia);
let pagoArl = arl(pdias, pvdia);
let pagoDeducible = deducible(pdias, pvdia);
let sueldoFinal = pagoTotal(pdias, pvdia);

console.log("El salario de la persona es de: $" + totalSalario);
console.log("El subsidio de transporte de la persona es de: $" + subTransporte);
console.log("El pago de salud es de: $" + pagoSalud);
console.log("El pago de pensión es de: $" + pagoPension);
console.log("El pago de ARL es de: $" + pagoArl);
console.log("El total de descuentos es de: $" + pagoDeducible);
console.log("El sueldo final después de descuentos es de: $" + sueldoFinal);
