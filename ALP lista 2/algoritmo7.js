let a = Number(prompt("Digite a quantidade de anos"));
let m = Number(prompt("Digite a quantidade de meses"));
let d = Number(prompt("Digite a quantidade de dias"));

let idade = a*365 + m*30 + d;

document.write(`Seu total de idade em dias é ${idade}`)