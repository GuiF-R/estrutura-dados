function CalcularQuadrado() {
    let numero1 = Number(document.getElementById('numero1').value);
    let resultado = numero1 * numero1
    document.getElementById("Resultado").innerHTML = "O resultado é:" + " " + resultado; 
}
