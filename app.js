let numeroSecreto = 0;
let intentos = 0;
let listaNumerosGenerados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    console.log(numeroSecreto);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento("p", `Acertaste el número en ${intentos} ${(intentos == 1) ? " vez" : " veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else {
        if(numeroDeUsuario>numeroSecreto){
            asignarTextoElemento("p", "El numero secreto es menor");
        }else{
            asignarTextoElemento("p", "El numero secreto es mayor");
        }
        intentos ++;
        limpiarCaja()
    }
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
    if (listaNumerosGenerados.length == numeroMaximo) {
        asignarTextoElemento("p", "Ya se sortearon todos los numeros posibles")
    } else {
            //Si el numero generado esta en la lista
        if (listaNumerosGenerados.includes(numeroGenerado)) {
            //Si ya esta en la lista genera otro numero aleatorio
            return generarNumeroSecreto();
        } else {
            //Sino lo suma a la lista
            listaNumerosGenerados.push(numeroGenerado);
            return numeroGenerado;
        }
    }    
}
function condicionesIniciales(){
    asignarTextoElemento("h1", "Juego del numero secreto");
    asignarTextoElemento("p", "Escoje un numero del 1 al " + numeroMaximo);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
//limpiar caja si no acierta el numero
function limpiarCaja() {
    let valorCaja = document.querySelector("#valorUsuario").value = "";
}
function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de inicio
    condicionesIniciales();
    //deshabilitar de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled", true);
}
condicionesIniciales();



