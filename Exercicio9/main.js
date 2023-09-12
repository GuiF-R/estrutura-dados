document.getElementById("calcular").addEventListener("click", function() {
    // Obtém os valores inseridos pelo usuário
    var cotacao = parseFloat(document.getElementById("cotacao").value);
    var quantidadeDolar = parseFloat(document.getElementById("quantidadeDolar").value);

    // Calcula a conversão para Real
    var valorReal = cotacao * quantidadeDolar;

    // Exibe o resultado na página
    var resultado = document.getElementById("resultado");
    var valorDolar = document.getElementById("valorDolar");
    var valorRealElement = document.getElementById("valorReal");

    valorDolar.textContent = quantidadeDolar.toFixed(2);
    valorRealElement.textContent = valorReal.toFixed(2);

    resultado.classList.remove("hidden");
});
