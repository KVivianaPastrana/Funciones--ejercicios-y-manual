function areaCuadrado(base) {
    return base * base;
}

function areaRectangulo(base, altura) {
    return base * altura;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
console.log("El area del cuadrado es de : "+areaCuadrado(2));
console.log("El area del rectangulo es de : "+areaRectangulo(2, 3));
console.log("El area del triangulo es de :"+areaTriangulo(2, 3));
