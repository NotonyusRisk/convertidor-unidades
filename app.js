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
    let F = 0;
    F = (C * 9/5) + 32;
    console.log(F);
    resultado.innerHTML = F;
}

function fahrenheit_celcius(F){
    resultado.innerHTML = "";
    let C = 0;
    C = (F -32) * 5 / 9;
    console.log(C);
    resultado.innerText = C;
}

function celcius_kelvin(C) {
    resultado.innerHTML = "";
    let K = 0;
    K = C + 273;
    console.log(k);
    resultado.innerText = K;
}

function kelvin_celcius(K) {
    resultado.innerHTML = "";
    let C = 0;
    C = K - 273;
    console.log(C);
    resultado.innerHTML = C;
}

function fahrenheit_kelvin(F) {
    resultado.innerHTML = "";
    let K = 0;
    K = (F + 459) * 5/9;
    console.log(k);
    resultado.innerHTML = K;
}

function kelvin_fahrenheit(K) {
    resultado.innerHTML = "";
    let F = 0;
    F = (K * 9/5) -459;
    console.log(F);
    resultado.innerHTML = F;
}