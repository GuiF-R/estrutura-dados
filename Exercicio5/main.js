
const numeroTotalPrestacoes = 120; 
const quantidadePrestacoesPagas = 24; 
const valorPrestacaoAtual = 500; 

const totalPago = quantidadePrestacoesPagas * valorPrestacaoAtual;

const saldoDevedor = (numeroTotalPrestacoes - quantidadePrestacoesPagas) * valorPrestacaoAtual;

console.log("Valor ja pago pelo consorciado: R$" + totalPago.toFixed(2));
console.log("Valor que o consorciado ainda deve: R$" + saldoDevedor.toFixed(2));
