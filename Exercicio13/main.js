document.getElementById("equacaoForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Obtém os valores de A, B e C inseridos pelo usuário
    var a = parseFloat(document.getElementById("a").value);
    var b = parseFloat(document.getElementById("b").value);
    var c = parseFloat(document.getElementById("c").value);

    // Calcula o discriminante
    var discriminante = Math.pow(b, 2) - 4 * a * c;

    // Inicializa as raízes
    var raiz1, raiz2;

    // Verifica o valor do discriminante
    if (discriminante > 0) {
        // Duas raízes reais distintas
        raiz1 = (-b + Math.sqrt(discriminante)) / (2 * a);
        raiz2 = (-b - Math.sqrt(discriminante)) / (2 * a);
        exibirResultado(`Raízes reais distintas: x1 = ${raiz1.toFixed(2)}, x2 = ${raiz2.toFixed(2)}`);
    } else if (discriminante === 0) {
        // Raiz real única (raízes coincidentes)
        raiz1 = -b / (2 * a);
        exibirResultado(`Raiz real única: x = ${raiz1.toFixed(2)}`);
    } else {
        // Nenhuma raiz real
        exibirResultado("Não existem raízes reais");
    }
});

// Função para exibir o resultado na página HTML
// Função para exibir o resultado na página HTML
function exibirResultado(mensagem) {
    var resultadoElement = document.getElementById("resultado");
    
    // Crie um elemento de parágrafo para exibir o resultado
    var paragrafo = document.createElement("p");
    paragrafo.textContent = mensagem;
    
    // Limpe o conteúdo anterior, se houver
    while (resultadoElement.firstChild) {
        resultadoElement.removeChild(resultadoElement.firstChild);
    }

    // Adicione o novo parágrafo ao elemento "resultado"
    resultadoElement.appendChild(paragrafo);

    resultadoElement.style.display = "block";
}

