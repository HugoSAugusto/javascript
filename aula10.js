const consumoAuto = 12;

function gastoComb(tempGasto, velocMedia){
    const distancia = velocMedia * tempGasto;
    const consumoFinal = distancia / consumoAuto

    return consumoFinal.toFixed(3)
}

console.log(gastoComb(10, 85))
console.log(gastoComb(2, 92))
console.log(gastoComb(22, 67))