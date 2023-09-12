document.getElementById("expressaoForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Obtém os valores inseridos pelo usuário
    var a = parseFloat(document.getElementById("a").value);
    var b = parseFloat(document.getElementById("b").value);
    var c = parseFloat(document.getElementById("c").value);

    // Calcula R e S
    var r = Math.pow(a + b, 2);
    var s = Math.pow(b + c, 2);
    var d = r + s / 2;

    // Exibe o resultado na página
    var resultado = document.getElementById("resultado");
    var valorD = document.getElementById("valorD");

    valorD.textContent = d.toFixed(2);
    resultado.style.display = "block";
});
