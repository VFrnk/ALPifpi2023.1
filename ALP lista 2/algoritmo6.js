let valor = Number(prompt("Digite o valor do produto"));

let desconto = valor * 0.3;
let valor_pago = valor - desconto;

document.write(`Do valor inicial de ${valor}, serão descontados ${desconto.toFixed(2)}, resultando num valor total de ${valor_pago.toFixed(2)}`);
