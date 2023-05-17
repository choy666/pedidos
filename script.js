//inicializacion
var inputTotal;
var mostrarTotal;
var totalCadetes;
var btnTotal;
var btnEnvios;
var cadete1;
var cadete2;
var cadete3;
var cadetes;
var tabla;
function iniciar(){

    tabla = document.getElementById('tabla');
    crearTabla();

    mostrarTotal = document.getElementById('total');
    inputTotal = document.getElementsByClassName('inputTotal');
    cadete1 = document.getElementsByClassName('cadete1');
    cadete2 = document.getElementsByClassName('cadete2');
    cadete3 = document.getElementsByClassName('cadete3');
    totalCadetes = document.getElementsByClassName('totalCadetes');
    nombresCadetes = document.getElementsByClassName('nombresCadetes');
    cadetes = document.getElementsByClassName('cadetes');

    btnTotal = document.getElementById('btn-total');
    btnEnvios = document.getElementById('btn-envios');
    btnTotal.addEventListener('click', calcularTotal);
    btnEnvios.addEventListener('click', calcularEnvios);

}
//
function crearTabla(){
    var contador=1;
    for(var i=0;i<30;i++) {
        var fila = document.createElement('div');
        fila.className = 'fila';
    
        var label1 = document.createElement('label');
        label1.className = 'nro';
        label1.innerHTML = contador;
    
        var input1 = document.createElement('input');
        input1.setAttribute('type', "text");
    
        var input2 = document.createElement('input');
        input2.setAttribute('type', "text");
    
        var input3 = document.createElement('input');
        input3.setAttribute('type', "number");
        input3.className = "inputTotal";
    
        var input4 = document.createElement('input');
        input4.setAttribute('type', "number");
        input4.className = "cadete1";
        
        var input5 = document.createElement('input');
        input5.setAttribute('type', "number");
        input5.className = "cadete2";
    
        var input6 = document.createElement('input');
        input6.setAttribute('type', "number");
        input6.className = "cadete3";
    
        fila.appendChild(label1);
        fila.appendChild(input1);
        fila.appendChild(input2);
        fila.appendChild(input3);
        fila.appendChild(input4);
        fila.appendChild(input5);
        fila.appendChild(input6);
        tabla.appendChild(fila);
        contador++;
    }
}
// funciones
function calcularTotal(){
    var totales = 0;
    for(var i = 0; i < inputTotal.length; i++){
        if(inputTotal[i].value){
            totales += parseInt(inputTotal[i].value);
        }
    }
    console.log(totales);
    mostrarTotal.innerHTML = totales;
}
function calcularEnvios(){
    var totales=[];
    var totalCadete1=0;
    var totalCadete2=0;
    var totalCadete3=0;
    for(var i = 0; i < cadete1.length; i++){
        if(cadete1[i].value){
            totalCadete1 += parseInt(cadete1[i].value);
        }
    }
    totales.push(totalCadete1);
    for(var i = 0; i < cadete2.length; i++){
        if(cadete2[i].value){
            totalCadete2 += parseInt(cadete2[i].value);
        }
    }
    totales.push(totalCadete2);
    for(var i = 0; i < cadete3.length; i++){
        if(cadete3[i].value){
            totalCadete3 += parseInt(cadete3[i].value);
        }
    }
    totales.push(totalCadete3);
    for(var i = 0; i < totalCadetes.length; i++){
        totalCadetes[i].innerHTML = totales[i];
    }
    for(var i = 0; i < 3;i++){
        console.log(nombresCadetes[i].value);
        if(nombresCadetes[i].value != 0){
            cadetes[i].style.color = "white";
            cadetes[i].innerHTML = nombresCadetes[i].value;
        }
        else{
            cadetes[i].innerHTML = "Completar";
            cadetes[i].style.color = "red";
        }
    }
}
window.addEventListener("load",iniciar);