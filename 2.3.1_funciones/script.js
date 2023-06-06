function enviarCorreos(destinatarios, message) {
    console.log(destinatarios);

    for(let index = 0; index < destinatarios.length; index++) {
        console.log(index, destinatarios[index]);
        console.log(`Enviando correo a ${destinatarios[index]}`);
        if (message) {
            console.log(message);
        } else {
            console.log(`Mensaje Enviado: Hola ${destinatarios[index]}, espero qué todo vaya bien y recibiras noticias pronto.`);
        }   
    }
    return "______________CORREOS_ENVIADOS_______________";
}

 const alumnosMali = ['Anderson', 'Jeffry', 'Andres', 'Steven', 'William', 'Jose Fernando'];

 const senseisDevF = ['Seb', 'Omar', 'Joel', 'Francisco', 'Alfredo', 'Yaxk'];

/*
for(let index = 0; index < alumnosMali.length; index++) {
    console.log(index, alumnosMali[index]);
    // console.log("Enviando correo a", alumnosMali[index]);
    console.log(`Enviando correo a ${alumnosMali[index]}`);
    console.log(`Mensaje Enviado: Hola ${alumnosMali[index]}, espero qué todo vaya bien y recibiras noticias pronto.`);
}


for(let index = 0; index < senseisDevF.length; index++) {
    console.log(index, senseisDevF[index]);
    // console.log("Enviando correo a", senseisDevF[index]);
    console.log(`Enviando correo a ${senseisDevF[index]}`);
    console.log(`Mensaje Enviado: Hola ${senseisDevF[index]}, espero qué todo vaya bien y recibiras noticias pronto.`);
} */


const enviados = enviarCorreos(senseisDevF);
if(enviados === "______________CORREOS_ENVIADOS_______________") {
    enviarCorreos(alumnosMali, "Espero que acaben sus tareas, si necesitan ayuda nos avisan.");
}

function transformarArreglo(arreglo){
    return ["1",2,4].concat(arreglo);
}


function x(parametro1, parametro2) {
    // lineas de código
    // return palabra || null;
}

/* function prompt1(message, _default) {
    const mensajeCompleto = `EL mensaje del prompt1 es: ${message}`;
    console.log(mensajeCompleto);
    return message + message; 
}

console.log(prompt1);
console.log(prompt1("Hola, ingresa un número"));


const miResultado = prompt1("Hey");
console.log(miResultado);

const miResultado1 = prompt1("Hi");
const otroValor = miResultado1 + "23";
console.log(otroValor); */


function prenderLuz1(hora, tiempoPrendida){
    // conectarme a la lampara (IOT)
}

// Compara hora actual con la esperada
function prenderLuz(horaEncedido, horaActual){
    // conectarme a la lampara (IOT)
    if(horaEncedido === horaActual) {
        // mandar señal al dispositivo para prenderlo
        document.write(`<img src="encendido.PNG" alt="Encendido">`);
        alert("Prendimos lámpara.");

        return true;
    }
    return false;
}
function mandarTiempos() {
    const fechaActual = new Date();
    // const horaActual = fechaActual.getHours();
    const horaActual = fechaActual.getMinutes();
    console.log("Voy a hacer la comparación " + horaActual);
    const tiempoDeEncendidoLampara = 31;
    prenderLuz(tiempoDeEncendidoLampara, horaActual);
}
setInterval(() => {
    mandarTiempos();
}, 1000 * 60);
