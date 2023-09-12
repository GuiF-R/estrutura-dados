// Função para calcular a média
function calcularMedia() {
    // Obtém os valores inseridos pelo usuário
    var nomeAluno = document.getElementById("nome").value;
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var nota3 = parseFloat(document.getElementById("nota3").value);

    // Calcula a média aritmética
    var media = (nota1 + nota2 + nota3) / 3;

    // Exibe o resultado na página
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = "Nome do aluno: " + nomeAluno + "<br>Média das notas: " + media.toFixed(2);
}

// Adiciona um evento de clique ao botão "Calcular Média"
document.getElementById("calcular").addEventListener("click", calcularMedia);
