let a = prompt("Número 1: ")
let b = prompt("Número 2: ")
let c = prompt("Número 2: ")

if ( ( a <= b ) && ( (a <= c) ) ) {
    alert("El menor es: " + a)
} else if ( ( b <= a ) && ( b <= c ) ) {
    alert("El menor es: " + b)
} else if ( ( c <= a ) && ( c <= b ) ) {
    alert("El menor es: " + c)
}