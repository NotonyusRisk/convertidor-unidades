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
        btnConvertir.addEventListener("click", celcius_fahrenheit);
        break;
    case 2:
        btnConvertir.addEventListener("click", fahrenheit_celcius);
        break;
    case 3:
        btnConvertir.addEventListener("click", celcius_kelvin);
        break;
    case 4:
        btnConvertir.addEventListener("click", kelvin_celcius);
        break;
    default:
        alert("Opcion denegada.");
}

//funciones
function celcius_fahrenheit() {
    
}

function fahrenheit_celcius(){

}

function celcius_kelvin() {

}

function kelvin_celcius() {

}

//pruebas
