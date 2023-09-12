document.getElementById("prestacaoForm").addEventListener("submit", function(e) {
    e.preventDefault();

    // Obtém os valores inseridos pelo usuário
    var valor = parseFloat(document.getElementById("valor").value);
    var taxa = parseFloat(document.getElementById("taxa").value);
    var diasAtraso = parseFloat(document.getElementById("diasAtraso").value);

    // Calcula o valor da prestação em atraso
    var valorPrestacao = valor + (valor * (taxa / 100) * diasAtraso);

    // Exibe o resultado na página
    var resultado = document.getElementById("resultado");
    var valorPrestacaoElement = document.getElementById("valorPrestacao");

    valorPrestacaoElement.textContent = valorPrestacao.toFixed(2);
    resultado.style.display = "block";
});
