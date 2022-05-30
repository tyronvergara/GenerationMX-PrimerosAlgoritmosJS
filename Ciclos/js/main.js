
let limiteSuperior = 100;
let limiteInferior = 0;
let limiteMedio = (limiteInferior + limiteSuperior) / 2;


while (true) {

    let preguntaAdivinanza = confirm("¿Tú número es " + limiteMedio + " ?")

    if (preguntaAdivinanza) {
        alert("Su número es " + limiteMedio)
        break;
    }

    let preguntaNumero = confirm("¿Tú número es mayor a " + limiteMedio + " ?")

    if (preguntaNumero) {
        if (!(limiteMedio % 2 == 0)) {
            limiteInferior = parseInt(limiteMedio) - 1;
        } else {
            limiteInferior = limiteMedio;
        }    
    } else {
        if (!(limiteMedio % 2 == 0)) {
            limiteSuperior = parseInt(limiteMedio) + 1;
        } else {
            limiteSuperior = limiteMedio;
        } 
    }

    limiteMedio = ((limiteInferior + limiteSuperior) / 2)
}

/*
let num;

while (isNaN(num) || (num < 1 || num > 100)) {
    num = parseInt( prompt("Escribe un número entre el 1 y el 100"))
    console.log(num)
}
*/

/*
let index = 1;

while(index <= 100) {
    if ((index % 2) == 0) {
        console.log(index + " es un número par")
    }

    index++;
}

console.log(index);

*/

/* 
for (let index = 5; index <= 100; index += 5) {
    if ((index % 2) == 0) {
        console.log(index + " es un número Par")
    }
}
*/