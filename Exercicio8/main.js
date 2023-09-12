document.getElementById("calcular").addEventListener("click", function() {
    // Obtém os valores inseridos pelo usuário
    var nomeVendedor = document.getElementById("nomeVendedor").value;
    var salarioFixo = parseFloat(document.getElementById("salarioFixo").value);
    var vendasMes = parseFloat(document.getElementById("vendasMes").value);

    // Calcula o salário final
    var comissao = 0.15 * vendasMes; // 15% de comissão sobre as vendas
    var salarioFinal = salarioFixo + comissao;

    // Exibe o resultado na página
    var resultado = document.getElementById("resultado");
    var nomeResultado = document.getElementById("nomeResultado");
    var salarioFixoResultado = document.getElementById("salarioFixoResultado");
    var salarioFinalResultado = document.getElementById("salarioFinalResultado");

    nomeResultado.textContent = nomeVendedor;
    salarioFixoResultado.textContent = salarioFixo.toFixed(2);
    salarioFinalResultado.textContent = salarioFinal.toFixed(2);

    resultado.classList.remove("hidden");
});
