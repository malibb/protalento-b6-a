// let nombre; -> undefined un valor no controlado que no existe
// let nombre = null; porque estoy dejando sin saber de que tipo seria mi variable
let nombre = "";
console.log(`El valor de nombre antes del prompt: ${nombre}.`);
nombre = prompt("Ingresa tu nombre");
console.log(`El nombre ingresado es: ${nombre}.`);

