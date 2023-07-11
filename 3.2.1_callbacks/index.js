const saludar = nombre => {
    console.log("Hola "+ nombre);
};
const despedirse = nombre => {
    console.log("Adiós "+ nombre);
};
function nombreFunction(){
    console.log("Soy una función");
}

const elAdministrador =  (callback, numero, nombre) => {
    console.log(callback, numero);
    callback(`${nombre} - ${numero}`);
};

elAdministrador(despedirse, 5, "Helado");

saludar("mali");

function miCallback(error, response, body) {
    console.error('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
};

function miCallbackError(error) {
    console.error('error:', error);
}

const request = require('request');

request.get('https://pokeapi.co/api/v2/pokemon/ditt', function (error, response, body) {
    console.error('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // if(response && response.statusCode === 200){
        const objJS = JSON.parse(body);
        // console.log('body:', objJS.abilities[0].ability.url);
        request.get(objJS.abilities[0].ability.url, miCallback);
        // miCallback(error, response, body);
    // } 
});