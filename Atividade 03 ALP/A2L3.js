let qnt1 = Number(prompt("Digite a quantidade do primeiro produto"));
let val1 = Number(prompt("Digite o valor do primeiro produto"));
let qnt2 = Number(prompt("Digite a quantidade do segundo produto"));
let val2 = Number(prompt("Digite o valor do segundo produto"));
let imposto = Number(prompt("Digite a taxa adicional"));
let total = (qnt1*val1 + qnt2*val2)*(imposto/100 + 1);
document.write(`O valor a ser pago é de: ${total.toFixed(2)} R$`);