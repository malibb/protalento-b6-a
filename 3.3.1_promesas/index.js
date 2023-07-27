function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const miPromesa = new Promise((resolve, reject) => {
    const numeroAleatorio = getRandomInt(10);
    if (numeroAleatorio>5){
            resolve([true, numeroAleatorio]);
    }
    reject([false, numeroAleatorio, new Error("Número no mayor a 5")]);
});

miPromesa
.then((resultadoPromesaCuandoFunciona) => {
    console.log(resultadoPromesaCuandoFunciona);
})
.catch((resultadoPromesaCuandoFalla) => {
    console.log(resultadoPromesaCuandoFalla);
});