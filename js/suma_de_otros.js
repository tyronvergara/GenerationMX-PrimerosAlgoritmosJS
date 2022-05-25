let a = prompt("Número 1: ")
let b = prompt("Número 2: ")
let c = prompt("Número 2: ")

if ( a + b == c ) {
    alert(c + " es la suma de " + a + " y " + b)
} else if ( a + c == b ) {
    alert(b + " es la suma de " + a + " y " + c)
} else if ( c + b == a ) {
    alert(a + " es la suma de " + c + " y " + b)
} else {
    alert("Ningun numero es suma de los otros")
}