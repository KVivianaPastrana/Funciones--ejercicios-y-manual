const  tablaMultiplicar = function(pfactor1, pfactor2) {
    let contarPar = 0;
    let contarImpar = 0;
    let factor1 = pfactor1;
    let factor2 = pfactor2;
    for (let multiplicando = 1; multiplicando <= factor1; multiplicando++) {
        for (let multiplicador = 1; multiplicador <= factor2; multiplicador++) {
            let resultado = multiplicando * multiplicador;
            console.log(multiplicando + " * " + multiplicador + " = " + resultado);
            if (resultado % 2 === 0) {
                console.log("buzz");
                contarPar++;
            } else {
                console.log("bass");
                contarImpar++;
            }
        }
    }
    console.log("Cantidad de resultados pares: " + contarPar);
    console.log("Cantidad de resultados impares: " + contarImpar);
}

tablaMultiplicar(5, 5);
