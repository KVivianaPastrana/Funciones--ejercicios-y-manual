const  tablaMultiplicar  = function(pfactor1, pfactor2) {
    let contarPar = 0;
    let contarImpar = 0;
    let factor1 = pfactor1;
    let factor2 = pfactor2;
    let multiplicando = 1;
    while (multiplicando <= factor1) {
        let multiplicador = 1;
        while (multiplicador <= factor2) {
            let resultado = multiplicando * multiplicador;
            console.log(multiplicando + " * " + multiplicador + " = " + resultado);
            if (resultado % 2 === 0) {
                console.log("buzz");
                contarPar++;
            } else {
                console.log("bass");
                contarImpar++;
            }
            multiplicador++;
        }
        multiplicando++;
    }
    console.log("Cantidad de resultados pares: " + contarPar);
    console.log("Cantidad de resultados impares: " + contarImpar);
}

tablaMultiplicar(5, 5);
