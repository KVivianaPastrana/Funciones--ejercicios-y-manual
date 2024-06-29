function contarParesImpares(pcontar, numero) {
    for (let contar = pcontar; contar <= numero; contar++) {
        if (contar % 2 === 0) {
            console.log(contar + " es par");
        } else {
            console.log(contar + " es impar");
        }
    }
}

contarParesImpares(0, 5);
