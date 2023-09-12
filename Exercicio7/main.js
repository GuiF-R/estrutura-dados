// Função para calcular o preço final do automóvel
function calcularPrecoFinal() {
    // Obtém o valor do custo de fábrica inserido pelo usuário
    var custoFabrica = parseFloat(document.getElementById("custoFabrica").value);

    // Calcula o preço final
    var percentagemRevendedor = 0.25; // 25% do custo de fábrica
    var impostos = 0.45; // 45% do custo de fábrica
    var precoFinal = custoFabrica + (custoFabrica * percentagemRevendedor) + (custoFabrica * impostos);

    // Exibe o resultado na página
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = "Preço Final do Automóvel: R$ " + precoFinal.toFixed(2);
}

// Adiciona um evento de clique ao botão "Calcular Preço Final"
document.getElementById("calcular").addEventListener("click", calcularPrecoFinal);
