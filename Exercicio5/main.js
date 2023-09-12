// Defina as variáveis com os valores fornecidos
const numeroTotalPrestacoes = 120; // Número total de prestações
const quantidadePrestacoesPagas = 24; // Quantidade de prestações pagas
const valorPrestacaoAtual = 500; // Valor atual da prestação

// Calcule o total pago pelo consorciado
const totalPago = quantidadePrestacoesPagas * valorPrestacaoAtual;

// Calcule o saldo devedor
const saldoDevedor = (numeroTotalPrestacoes - quantidadePrestacoesPagas) * valorPrestacaoAtual;

// Exiba os resultados
console.log("Total pago pelo consorciado: R$" + totalPago.toFixed(2));
console.log("Saldo devedor: R$" + saldoDevedor.toFixed(2));
