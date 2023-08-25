function CalcularSoma() {
    let numero1 = Number(document.getElementById('numero1').value);
    let numero2 = Number(document.getElementById('numero2').value);
    let resultado = (numero1 + numero2)
    document.getElementById("ResultadoSoma").innerHTML = "O resultado da soma é:" + " " + resultado; 
}
function CalcularSub() {
    let numero1 = Number(document.getElementById('numero1').value);
    let numero2 = Number(document.getElementById('numero2').value);
    let resultado = (numero1 - numero2)
    document.getElementById("ResultadoSub").innerHTML = "O resultado da subtração é" + " " + resultado; 
}
function CalcularMult() {
    let numero1 = Number(document.getElementById('numero1').value);
    let numero2 = Number(document.getElementById('numero2').value);
    let resultado = (numero1 * numero2)
    document.getElementById("ResultadoMult").innerHTML = "O resultado da multiplicação é:" + " " + resultado; 
}
function CalcularDiv() {
    let numero1 = Number(document.getElementById('numero1').value);
    let numero2 = Number(document.getElementById('numero2').value);
    let resultado = (numero1 / numero2)
    document.getElementById("ResultadoDiv").innerHTML = "O resultado da divião é :" + " " + resultado; 
}