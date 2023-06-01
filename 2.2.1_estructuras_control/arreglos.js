// Arreglos
const alumno1 = 'Anderson';
const alumno2 = 'Andrea';
const alumno3 = 'Andres';

const alumnosMaliVacio = []; // crear un arreglo vacio 

const alumnosMali = ['Anderson', 'Jeffry', 'Andres', 'William', 'Jose Fernando']; // crear un arreglo vacio 
console.log(alumnosMali);
// alumnosMali = "losalumnos de mali";
alumnosMali.push('Steven');

console.log(alumnosMali);

// alumnosMali.pop();
// alumnosMali.pop();

console.log(alumnosMali);
// El arreglo va a ser un estructura que permite trabajar con ella por medio 
// de acciones ya pre-hechas para poder cambiarlo.
// a estas acciones pertenecientes al arreglo les llamaremos métodos

console.log(alumnosMali[1]);

// Estructura de control de repetición de mi preferencia.
console.log('Concatenando mensaje con el nombre');
console.log('Hacer el correo');
console.log('Enviar el correo');




/* 
alumnosMali = ["Jeffry"];
VM1005:1 Uncaught TypeError: Assignment to constant variable.
    at <anonymous>:1:13
(anónimas) @ VM1005:1
alumnosMali[1] = "Jeffry";
'Jeffry'
alumnosMali
(4) ['Anderson', 'Jeffry', 'Andres', 'Steven']0: "Anderson"1: "Jeffry"2: "Andres"3: "Steven"length: 4[[Prototype]]: Array(0)
alumnosMali[4] = "Jeffry";
'Jeffry'
alumnosMali
(5) ['Anderson', 'Jeffry', 'Andres', 'Steven', 'Jeffry']
alumnosMali[40] = "Jeffry";
'Jeffry'
alumnosMali
(41) ['Anderson', 'Jeffry', 'Andres', 'Steven', 'Jeffry', vacío × 35, 'Jeffry']0: "Anderson"1: "Jeffry"2: "Andres"3: "Steven"4: "Jeffry"40: "Jeffry"length: 41[[Prototype]]: Array(0)
alumnosMali("Jose Fernando")
VM1403:1 Uncaught TypeError: alumnosMali is not a function
    at <anonymous>:1:1
(anónimas) @ VM1403:1
alumnosMali.push("Jose Fernando");
42
alumnosMali
(42) ['Anderson', 'Jeffry', 'Andres', 'Steven', 'Jeffry', vacío × 35, 'Jeffry', 'Jose Fernando']0: "Anderson"1: "Jeffry"2: "Andres"3: "Steven"4: "Jeffry"40: "Jeffry"41: "Jose Fernando"length: 42[[Prototype]]: Array(0)
alumnosMali.pop();
'Jose Fernando'
alumnosMali
(41) ['Anderson', 'Jeffry', 'Andres', 'Steven', 'Jeffry', vacío × 35, 'Jeffry']
alumnosMali.pop();
'Jeffry'
alumnosMali
(40) ['Anderson', 'Jeffry', 'Andres', 'Steven', 'Jeffry', vacío × 35]
alumnosMali.pop();
undefined
alumnosMali
(39) ['Anderson', 'Jeffry', 'Andres', 'Steven', 'Jeffry', vacío × 34]
alumnosMali.le
undefined
alumnosMali.length
39
alumnosMali.push("Jose Fernando");
40
alumnosMali.length
40
alumnosMali.push("Jose Fernando");
41
alumnosMali.push("Jose Fernando");
42
alumnosMali.length
42
alumnosMali
(42) ['Anderson', 'Jeffry', 'Andres', 'Steven', 'Jeffry', vacío × 34, 'Jose Fernando', 'Jose Fernando', 'Jose Fernando']
const alumnosSeb = alumnosMali.sli
undefined
const alumnosSeb = alumnosMali.slice(0,4);
undefined
alumnosSeb
(4) ['Anderson', 'Jeffry', 'Andres', 'Steven']
alumnosMali
(42) ['Anderson', 'Jeffry', 'Andres', 'Steven', 'Jeffry', vacío × 34, 'Jose Fernando', 'Jose Fernando', 'Jose Fernando']
const txt = "jeffry,raul,anderson,steven,juanmanuel, pablo,andrea";
undefined
txt
'jeffry,raul,anderson,steven,juanmanuel, pablo,andrea'
const arregloEstudiantes = txt.split(",");
undefined
arregloEstudiantes
(7) ['jeffry', 'raul', 'anderson', 'steven', 'juanmanuel', ' pablo', 'andrea']
txt.split(",");
(7) ['jeffry', 'raul', 'anderson', 'steven', 'juanmanuel', ' pablo', 'andrea']0: "jeffry"1: "raul"2: "anderson"3: "steven"4: "juanmanuel"5: " pablo"6: "andrea"length: 7[[Prototype]]: Array(0)
alumnosMali
(42) ['Anderson', 'Jeffry', 'Andres', 'Steven', 'Jeffry', vacío × 34, 'Jose Fernando', 'Jose Fernando', 'Jose Fernando']
alumnosMali.splice(4,36,"William");
(36) ['Jeffry', vacío × 34, 'Jose Fernando']
alumnosMali
(7) ['Anderson', 'Jeffry', 'Andres', 'Steven', 'William', 'Jose Fernando', 'Jose Fernando']0: "Anderson"1: "Jeffry"2: "Andres"3: "Steven"4: "William"5: "Jose Fernando"6: "Jose Fernando"length: 7[[Prototype]]: Array(0)
alumnosMali.pop();
'Jose Fernando'
alumnosMali
(6) ['Anderson', 'Jeffry', 'Andres', 'Steven', 'William', 'Jose Fernando']


*/