let lado1;
let lado2;
let lado3;

const calcularAreaCuadrados = function(plado1, plado2, plado3) {
    lado1 = plado1;
    lado2 = plado2;
    lado3 = plado3;
    const area1 = lado1 * lado1;
    const area2 = lado2 * lado2;
    const area3 = lado3 * lado3;

    console.log("Área del primer cuadrado:" + area1);
    console.log("Área del segundo cuadrado:" + area2);
    console.log("Área del tercer cuadrado:" + area3);
    let mayorArea = area1;
    if (area2 > mayorArea) {
        mayorArea = area2;
    }
    if (area3 > mayorArea) {
        mayorArea = area3;
    }
    console.log("El área mayor es:", mayorArea);
};

calcularAreaCuadrados(4, 5, 6);
