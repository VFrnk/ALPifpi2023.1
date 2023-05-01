let custo = Number(prompt("Digite o valor de custo:"));
let lucro = Number(prompt("Digite o valor da margem de lucro:"));
let vvenda = custo*(lucro/100 + 1);
document.write(`O valor de venda será de ${vvenda.toFixed(2)} R$`);