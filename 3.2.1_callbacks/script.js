const saludar = nombre => {
    debugger;
    alert("Hola "+ nombre);
};
const despedirse = nombre => {
    debugger;
    alert("Adiós "+ nombre);
};

const elAdministrador =  (funcionQueQueremosUsar, numero) => {
    debugger;
    console.log(funcionQueQueremosUsar, numero);
    debugger;
    const nombre = prompt("Ingresa un nombre");
    debugger;
    funcionQueQueremosUsar(`${nombre} - ${numero}`);
};

elAdministrador(despedirse, 5);


