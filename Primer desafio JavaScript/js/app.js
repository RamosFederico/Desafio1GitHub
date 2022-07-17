//Algoritmo de ciclo Multiplo
let numeroIngresado = Number(prompt("Ingresar Numero"));

for (let i = 2; i <= 10; i++) {
    let resultado = numeroIngresado * i ;
    console.log(numeroIngresado + "X" + i + "=" + resultado);
}

//Valor en Repeticion, hasta escrbir "ESC"
let entrada = prompt("Ingresar un dato");

while (entrada != "ESC"){
    alert("El usuarion ingreso " + entrada);
    entrada = prompt("Ingresar otro dato");
}
alert("Saliste del bucle")

// Ingresar numero por prompt, para la repeticion del texto "Hola"
let numeroHola = Number(prompt("Ingresar numero ´Hola´"))

for (let i = 0; i < numeroHola; i++) {
    let resultado = numeroHola + i
    console.log("Hola" + resultado)
}