let smin = Number(prompt("Digite o valor atual do salário mínimo:"));
let s = Number(prompt("Digite o valor do seu salário:"));
let r = s/smin;
document.write(`Você recebe ${r.toFixed(2)} salário(s) mínimo(s)`);