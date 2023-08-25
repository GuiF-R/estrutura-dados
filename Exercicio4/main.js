function Calcular() {
    let saldo1 = 500;
    let numero1 = Number(document.getElementById('numero1').value);
    let resultado = saldo1 + numero1
    document.getElementById("Resultado").innerHTML = "Seu novo saldo é de:" + " " +"R$" + " " + resultado ; 
}
