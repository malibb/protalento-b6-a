const { sqrt, unit, string, evaluate } = require("mathjs");

const PI = 3.1416;

const r = 2;

let areaCirculo = PI * (r**2);

console.log(areaCirculo);
const a = sqrt(4);
console.log(a, string(unit('5cm')), string(evaluate('12.7 cm to inch')));
//math.evaluate('12.7 cm to inch');