document.getElementById("conversorForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Obtém a temperatura em Fahrenheit inserida pelo usuário
    var fahrenheit = parseFloat(document.getElementById("fahrenheit").value);

    // Converte para Celsius usando a fórmula
    var celsius = (fahrenheit - 32) * 5/9;

    // Exibe o resultado na página
    var resultado = document.getElementById("resultado");
    var celsiusElement = document.getElementById("celsius");

    celsiusElement.textContent = celsius.toFixed(2);
    resultado.style.display = "block";
});
