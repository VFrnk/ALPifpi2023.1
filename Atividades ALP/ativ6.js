let val = Number(prompt("Digite o valor:"));
let n100 = val/100;
val = val%100;
n100 = parseInt(n100);
let n50 = val/50;
val = val%50;
n50 = parseInt(n50);
let n20 = val/20;
val = val%20;
n20 = parseInt(n20);
let n10 = val/10;
val = val%10;
n10 = parseInt(n10);
let n5 = val/5;
val = val%5;
n5 = parseInt(n5);
let n2 = val/2;
n2 = parseInt(n2);
document.write(`Serão necessárias ${n100} notas de 100, ${n50} notas de 50, ${n20} notas de 20, ${n10} notas de 10, ${n5} notas de 5 e ${n2} notas de 2.`);