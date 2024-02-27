//referenciar los id
let valueConvertion = document.getElementById("value-convertion");
let valor = document.getElementById("valor");
let containerModal = document.getElementById("container-modal");
let btnCerrar = document.getElementById("cerrar");
let resultado = document.getElementById("resultado");
let btnConvertir = document.getElementById("convertir");

//variables
let election = valueConvertion.selectedIndex;
let numero = valor.value;

//condicionales
switch(election){
    case 1:
        btnConvertir.addEventListener("click", celcius_fahrenheit(numero));
        break;
    case 2:
        btnConvertir.addEventListener("click", fahrenheit_celcius(numero));
        break;
    case 3:
        btnConvertir.addEventListener("click", celcius_kelvin(numero));
        break;
    case 4:
        btnConvertir.addEventListener("click", kelvin_celcius(numero));
        break;
    case 5:
        btnConvertir.addEventListener("click", fahrenheit_kelvin(numero));
        break;
    case 6:
        btnConvertir.addEventListener("click", kelvin_fahrenheit(numero));
        break;
}

btnCerrar.onclick = () => {
    containerModal.style.display = none;
}

//funciones
function celcius_fahrenheit(C) {
    let F = (C * 9/5) + 32;
    resultado.innerText = F;
    containerModal.style.display = block;
}

function fahrenheit_celcius(F){
    let C = (F -32) * 5 / 9;
    resultado.innerText = C;
    containerModal.style.display = block;
}

function celcius_kelvin(C) {
    let K = C + 273;
    resultado.innerText = K;
    containerModal.style.display = block;
}

function kelvin_celcius(K) {
    let C = K - 273;
    resultado.innerText = C;
    containerModal.style.display = block;
}

function fahrenheit_kelvin(F) {
    let K = (F + 459) * 5/9;
    resultado.innerText = K;
    containerModal.style.display = block;
}

function kelvin_fahrenheit(K) {
    let F = (K * 9/5) -459;
    resultado.innerText = F;
    containerModal.style.display = block;
}
