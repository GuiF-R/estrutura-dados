document.getElementById("tintaForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Obtém os valores de altura (H) e raio (R) inseridos pelo usuário
    var altura = parseFloat(document.getElementById("altura").value);
    var raio = parseFloat(document.getElementById("raio").value);

    // Calcula a área da base (A)
    var areaBase = 3.14 * Math.pow(raio, 2);

    // Calcula a área lateral (L)
    var areaLateral = 2 * 3.14 * raio * altura;

    // Calcula a área total (T)
    var areaTotal = areaBase + areaLateral;

    // Calcula a quantidade total de litros de tinta necessários
    var litrosTinta = areaTotal * 2 / 3;

    // Calcula a quantidade de latas de tinta necessárias
    var latasTinta = Math.ceil(litrosTinta / 5);

    // Calcula o custo total
    var custoTotal = latasTinta * 40;

    // Exibe os resultados na página
    exibirResultado(`Quantidade de latas de tinta necessárias: ${latasTinta}`);
    exibirResultado(`Custo total: R$ ${custoTotal.toFixed(2)}`);
});

// Função para exibir o resultado na página HTML
function exibirResultado(mensagem) {
    var resultadoElement = document.getElementById("resultado");
    var resultadoCustoElement = document.getElementById("resultadoCusto");
    var paragrafo = document.createElement("p");
    paragrafo.textContent = mensagem;
    resultadoElement.appendChild(paragrafo);
    resultadoElement.style.display = "block";
}
