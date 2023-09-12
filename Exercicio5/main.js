
const numeroTotalPrestacoes = 120; 
const quantidadePrestacoesPagas = 24; 
const valorPrestacaoAtual = 500; 

// Calcule o total pago pelo consorciado
const totalPago = quantidadePrestacoesPagas * valorPrestacaoAtual;

// Calcule o saldo devedor
const saldoDevedor = (numeroTotalPrestacoes - quantidadePrestacoesPagas) * valorPrestacaoAtual;

// Exiba os resultados
console.log("Valor ja pago pelo consorciado: R$" + totalPago.toFixed(2));
console.log("Valor que o consorciado ainda deve: R$" + saldoDevedor.toFixed(2));
