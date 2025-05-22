'use strict';


let num;
let num2;
let resultado;

function suma(num,num2){
return num+num2;
}

function mostrarSuma(){
num = parseInt(document.getElementById("num").value);
num2 = parseInt(document.getElementById("num2").value);
resultado=suma(num,num2);
console.log(resultado);
document.getElementById("resultado").textContent = "El resultado es: " + resultado;
}


function resta(num1,num2){
return num1-num2;
}

function mostrarResta(){
num = parseInt(document.getElementById("num").value);
num2 = parseInt(document.getElementById("num2").value);
resultado=resta(num,num2);
console.log(resultado);
document.getElementById("resultado").textContent = "El resultado es: " + resultado;
}

function multiplicacion(num1,num2){
return num1*num2;
}

function mostrarMultiplicacion(){
num = parseInt(document.getElementById("num").value);
num2 = parseInt(document.getElementById("num2").value);
resultado=multiplicacion(num,num2);
console.log(resultado);
document.getElementById("resultado").textContent = "El resultado es: " + resultado;
}

function division(num1,num2){
return num1 / num2;
}

function mostrarDivision(){
num = parseInt(document.getElementById("num").value);
num2 = parseInt(document.getElementById("num2").value);
if(num2 ==0){
 resultado ="No se puede realizar la operacion";
}else{
resultado=division(num,num2);
}
document.getElementById("resultado").textContent = "El resultado es: " + resultado;
}
