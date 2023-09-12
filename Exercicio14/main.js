document.getElementById("trocaForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Obtém os valores de A e B inseridos pelo usuário
    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);

    // Troca os valores de A e B
    var temp = a;
    a = b;
    b = temp;

    // Exibe os valores trocados na página
    exibirResultado(`Valores trocados: A = ${a}, B = ${b}`);
});

document.getElementById("trocaForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Obtém os valores de A e B inseridos pelo usuário
    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);

    // Troca os valores de A e B
    var temp = a;
    a = b;
    b = temp;

    // Exibe os valores trocados na página
    exibirResultado(`Valores trocados: A = ${a}, B = ${b}`);
});

// Função para exibir o resultado na página HTML
function exibirResultado(mensagem) {
    var resultadoElement = document.getElementById("resultado");
    
    // Remove qualquer conteúdo anterior
    resultadoElement.innerHTML = "";
    
    // Cria um elemento de parágrafo para exibir o resultado
    var paragrafo = document.createElement("p");
    paragrafo.textContent = mensagem;
    
    // Adiciona o parágrafo ao elemento "resultado"
    resultadoElement.appendChild(paragrafo);

    resultadoElement.style.display = "block";
}
