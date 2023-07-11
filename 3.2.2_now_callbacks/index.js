const sumar = (a, b) => {
    return a + b;
}

const sumarASYNC = (a, b, callback) => {
    const resultado = a+b;
    if(resultado > 0){
        callback(resultado);
    }
    
}

console.log("Antes de la suma");

sumarASYNC(4, 3, function(resultado){
    console.log(resultado);
    sumarASYNC(resultado, 5, function(resultado1){
        console.log(resultado1);
        sumarASYNC(resultado1, 10, function(resultado2){
            console.log(resultado2);
            sumarASYNC(resultado2, 10, function(resultado3){
                console.log(resultado3);
            });
        });
    });
}); //callback hell;

console.log("Después de la suma");
