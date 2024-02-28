//referenciar los id
let valueConvertion = document.getElementById("value-convertion");
let valor = document.getElementById("valor");
let containerModal = document.getElementById("container-modal");
let btnCerrar = document.getElementById("cerrar");
let resultado = document.getElementById("resultado");
let btnConvertir = document.getElementById("convertir");

//variables
let election = parseInt(valueConvertion.selectedIndex);
let numero = parseInt(valor.value);

//eventos
btnCerrar.onclick = () => {
    containerModal.style.display = none;
}

btnConvertir.addEventListener("click", () => {
    switch(election){
        case 0:
            btnConvertir.addEventListener("click", () => {
                alert("Opcion no valida.");
            });
        case 1:
            celcius_fahrenheit(numero);
            break;
        case 2:
            fahrenheit_celcius(numero);
            break;
        case 3:
            celcius_kelvin(numero);
            break;
        case 4:
            kelvin_celcius(numero);
            break;
        case 5:
            fahrenheit_kelvin(numero);
            break;
        case 6:
            kelvin_fahrenheit(numero);
            break;
    }
    containerModal.style.display = block;
});

//funciones
function celcius_fahrenheit(C) {
    let F = (C * 9/5) + 32;
    resultado.innerText = F;
}

function fahrenheit_celcius(F){
    let C = (F -32) * 5 / 9;
    resultado.innerText = C;
}

function celcius_kelvin(C) {
    let K = C + 273;
    resultado.innerText = K;
}

function kelvin_celcius(K) {
    let C = K - 273;
    resultado.innerText = C;
}

function fahrenheit_kelvin(F) {
    let K = (F + 459) * 5/9;
    resultado.innerText = K;
}

function kelvin_fahrenheit(K) {
    let F = (K * 9/5) -459;
    resultado.innerText = F;
}