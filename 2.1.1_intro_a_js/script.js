document.write("Hola Mundo x2!");

console.log("Hola Mundo!");

// alert("Hola Mundo x3");

// String - Cadena de texto -> "palabra o más palabras"

// ay, no queremos usar var, ¿pero que vamos a ocupar?
// var mensaje = "Espero que les esté gustando JS.";

//Vamos a ocupar let o const
// let cuando queramos actualizar el valor en algún otro momento
// const cuando queramos mantener la estructura base de mi variable intacta

let mensaje = "Espero que les esté gustando JS.";

const PI = 3.1416;
// esto no se puede porque mi variable es constante :c -> PI = 3.14;
/*

Cuando tengan:
at script.js:19:4
Significa que hubo un error en "script.js" en la línea 19 en el símbolo o letra 4 de esa línea.
*/
mensaje = null;
mensaje = undefined;
document.write(mensaje);

console.log(mensaje);

let radio = 4;
// no se puede :C const radio = 2;
/* console.log(radio);
radio = radio * radio;

console.log(radio);
console.log(2 * PI * radio);

console.log(radio); */

let radioCuadrado = radio ** 2;
console.log(radioCuadrado);
console.log(2 * PI * radioCuadrado);

console.log(typeof 2);
console.log(typeof "hola");
console.log(typeof radioCuadrado);

const perrita = {
    cedula: "2131j23kj2k3j2k1j32j3",
    nombre: "Paloma",
    edad: 16,
    estaViva: false
};

console.log(perrita.cedula);

