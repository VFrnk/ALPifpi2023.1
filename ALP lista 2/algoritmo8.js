let valor = Number(prompt("digite o valor do boleto"));
let juros = Number(prompt("Digite a quantidade de juros"));
let dias = Number(prompt("Digite a quantidade de dias de atraso"));

let prestacao = valor + (valor*juros/100)*dias;

document.write(`A prestaçao a ser paga será de ${prestacao.toFixed(2)}`)