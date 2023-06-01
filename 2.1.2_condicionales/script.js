/* // let nombre; -> undefined un valor no controlado que no existe
// let nombre = null; porque estoy dejando sin saber de que tipo seria mi variable
let nombre = "";
console.log("El valor de nombre antes del prompt: " + nombre + ".");
console.log(`El valor de nombre antes
 del prompt: ${nombre}.`);
nombre = prompt("Ingresa tu nombre");
console.log(`El nombre ingresado es: ${nombre}.`); */


/*

1 === 1.0
true
"1" == 1.0
true
"123455" = prom
VM685:1 Uncaught SyntaxError: Invalid left-hand side in assignment
"123455" === prompt('pon tu contraseña')
true
"123455" === prompt('pon tu contraseña')
false
if ("123455" === prompt('pon tu contraseña')) {
    alert("Bienvenido, ya estamos adentro.");
}
undefined
if ("123455" === prompt('pon tu contraseña')) {
    alert("Bienvenido, ya estamos adentro.");
}
undefined
if ("123455" === prompt('pon tu contraseña')) {
    alert("Bienvenido, ya estamos adentro.");
} else {
    console.error("ALARMA: MENOR DE EDAD quiere robar mi cuenta");
}


*/
/**
    
let contraseniaIngresada = prompt('pon tu contraseña');

if ("123455" === contraseniaIngresada) {
    alert("Bienvenida Mali, ya estamos adentro.");
} else if ("asdfg" ===contraseniaIngresada) {
    alert("Bienvenido Alfredo, ya estamos adentro.");
} else {
    console.error("ALARMA: quieren robar mi cuenta.");
}

if ("123455" === prompt('pon tu contraseña') && 18 <= parseInt(prompt("dame tu edad"))) {
    alert("Bienvenido, ya estamos adentro.");
} else {
    console.error("ALARMA: MENOR DE EDAD quiere robar mi cuenta.");
}

if ( 20 <= prompt('cuanto traes') || 18 <= parseInt(prompt("dame tu edad"))) {
    alert("Bienvenido, ya estamos adentro.");
} else {
    document.write('<h1 style="color:red;">ALARMA: MENOR DE EDAD quiere colarse al bar.</h1>');
    console.error("ALARMA: MENOR DE EDAD quiere colarse al bar.");
}



Solicitar al usuario que responda a la pregunta (“¿Eres bellisimo/a?”), en
caso de contestar sí, responder “Ciertamente”, en caso de contestar no,
responder: “No te creo”.

 */

let respuestaEjercicio1 = prompt("¿Eres bellisimo/a?");

if (respuestaEjercicio1 === "si" || respuestaEjercicio1 === "Si" 
    || respuestaEjercicio1 === "SI") {
    console.log("Ciertamente.");
} else if (respuestaEjercicio1 === "no") {
    console.log("No te creo.");
} else {
    console.log("Eso que escribiste no lo entiendo.");
}

/* 
let variableText = prompt("pregunta");
let variableNumero = parseFloat(variableText);

let variableEnNumero = parseFloat(prompt("pregunta")); 
*/


let clime = prompt(`Esta lloviendo?`);

clime = clime.toLowerCase();

if (clime == `si`){
    console.log(`Llevar paraguas`);
} else {
    console.log(`No llevar paraguas`);
}
