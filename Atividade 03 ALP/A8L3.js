let a = Number(prompt("Digite o primeiro valor:"));
let b = Number(prompt("Digite o segundo valor:"));
let s = a+b;
let d = a-b;
let m = a*b;
let r = a/b;
document.write(`${a} + ${b} = ${s} <br/>`);
document.write(`${a} - ${b} = ${d} <br/>`);
document.write(`${a} x ${b} = ${m} <br/>`);
document.write(`${a} / ${b} = ${r.toFixed(2)}`);