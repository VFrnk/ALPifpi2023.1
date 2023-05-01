let a = Number(prompt("Digite o valor de A:"));
let b = Number(prompt("Digite o valor de B:"));
a1 = a;
b1 = b;
a = b1;
b = a1;
document.write(`Com a troca, A = ${a}. <br/>`);
document.write(`Com a troca, B = ${b}.`);