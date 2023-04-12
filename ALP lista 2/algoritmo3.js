let preco_comb = Number(prompt("Digite o preço do combustível:"));
let valor_abast = Number(prompt("Digite o valor a ser abastecido:"));
let litros = valor_abast/preco_comb;
document.write(`Foram comprados ${litros.toFixed(1)} litros.`);