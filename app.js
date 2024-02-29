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
btnConvertir.addEventListener("click", () => {
    if(election === 1){
        celcius_fahrenheit(numero);
    } else if(election === 2){
        fahrenheit_celcius(numero);
    } else if(election === 3){
        celcius_kelvin(numero);
    } else if(election === 4){
        kelvin_celcius(numero);
    } else if(election === 5){
        fahrenheit_kelvin(numero);
    } else if(election === 6){
        kelvin_fahrenheit(numero);
    }
    containerModal.style.display = "block";
});

btnCerrar.onclick = () => {
    containerModal.style.display = "none";
}


//funciones
function celcius_fahrenheit(C) {
    resultado.innerHTML = "";
    let F = (C * 9/5) + 32;
    resultado.innerHTML = F;
}

function fahrenheit_celcius(F){
    resultado.innerHTML = "";
    let C = (F -32) * 5 / 9;
    resultado.innerText = C;
}

function celcius_kelvin(C) {
    resultado.innerHTML = "";
    let K = C + 273;
    resultado.innerText = K;
}

function kelvin_celcius(K) {
    resultado.innerHTML = "";
    let C = K - 273;
    resultado.innerHTML = C;
}

function fahrenheit_kelvin(F) {
    resultado.innerHTML = "";
    let K = (F + 459) * 5/9;
    resultado.innerHTML = K;
}

function kelvin_fahrenheit(K) {
    resultado.innerHTML = "";
    let F = (K * 9/5) -459;
    resultado.innerHTML = F;
}