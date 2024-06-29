const compararNumeros= function(num1, num2) {
    if (num1 > num2) {
        return num1 + " es mayor que " + num2;
    } else if (num1 < num2) {
        return num1 + " es menor que " + num2;
    } else {
        return num1 + " es igual que " + num2;
    }
}

console.log(compararNumeros(10, 5));
console.log(compararNumeros(5, 5));
console.log(compararNumeros(5, 10));
