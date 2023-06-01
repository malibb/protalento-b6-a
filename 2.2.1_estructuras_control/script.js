/* 
let index = 0;
while (index <= 5) {
    // alert(`Te toqué la puerta ${index} veces.`);
    index++; // index = index + 1;
}

// Ejemplo #2
// Guarda un arreglo de valores introducidos
// Si el usuario no introduce un valor, termina el ciclo.
const arreglo = [];
let userInput; // undefined
while (!(userInput=="")) {
  userInput = prompt("Ingresa cualquier carácter"); // ""
  if (userInput !== "") arreglo.push(userInput);
  console.log(typeof userInput);
}
console.log("Introduciste estos valores: " + arreglo);
console.log(arreglo);

// Preguntar a los alumnos que problema observan en el código:
//Problema: Este código introduce el valor vacío al arreglo, se puede solucionar con una validación dentro del while, o preguntando una primera vez el valor del prompt antes de iterar.
const arregloDo = [];
do {
    let userInputDo = prompt("Ingresa cualquier carácter"); // ""
    if (userInputDo !== "") arregloDo.push(userInputDo);
} while (!(userInputDo==""));

console.log("Introduciste estos valores: " + arregloDo);
console.log(arregloDo); */


/// FOR
const alumnosMali = ['Anderson', 'Jeffry', 'Andres', 'Steven', 'William', 'Jose Fernando'];

for (let index = 0; index < alumnosMali.length; index++) {
    console.log(index, alumnosMali[index]);
}

for (let index = alumnosMali.length - 1; index >= 0 ; index--) {
    console.log(index, alumnosMali[index]);
}


let index = 0;
while (index <= 20) {
    // alert(`Te toqué la puerta ${index} veces.`);
    console.log("_1_  " + index);
    index += 5; // index = index + 5;
    console.log("_2_" + index);
}