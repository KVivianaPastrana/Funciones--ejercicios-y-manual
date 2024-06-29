function promedioNum(pnum1, pnum2, pnum3) {
    let num1 = pnum1;
    let num2 = pnum2;
    let num3 = pnum3;
    const sum = num1 + num2 + num3;
    return sum / 3;
}

const totalProm = promedioNum(80, 77, 88);
console.log("El promedio total es de: " + totalProm);
