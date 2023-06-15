console.log(document); // Referencia al DOM

// DOM: Document Object Model - Modelo de objeto de documento
// Modelo -> Contener toda la estructura estándar de nuestros documentos.
// Objeto -> Elemento de JS al cual podemos modificar e iterar por propiedades y métodos(funciones que pertenece a alguna entidad) del objeto.
// Documento -> Documento de HTML.

// Es una entidad que nos permite organizar en forma de código de JS el documento de HTML.

// Empezar a trabajar con los elementos de mi HTML

// CREAR
// LEER
// ACTUALIZAR
// BORRAR

// leer
const header = document.getElementById("header");

// creamos un elemento de html
const parrafo = document.createElement("p");
parrafo.innerText = "Este es un párrafo";
console.log(parrafo);
// innerHTML => hace referencia al html en el elemento(etiqueta)

// Actualizar lo que hay en body, agregando un nuevo elemento.

header.appendChild(parrafo);
// document.body.appendChild(parrafo);

for (let index = 0; index < 5; index++) {
    const parrafoDelFOR = document.createElement("p");
    parrafoDelFOR.innerText = "Este es un párrafo" + index;
    if (index === 0) {
        header.appendChild(parrafoDelFOR);
    } else {
        document.body.appendChild(parrafoDelFOR);
    }   
}

// borrar

header.removeChild(parrafo);


header.style.backgroundColor = "green";
