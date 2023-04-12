let cot_dolar = Number(prompt("Digite o valor atual do dólar:"));
let quant_real = Number(prompt("Digite a quantidade de reais a ser convertida:"));
let valor_dolar = quant_real/cot_dolar;
document.write(`${quant_real} reais equivalem a ${valor_dolar.toFixed(2)} dólares.`);