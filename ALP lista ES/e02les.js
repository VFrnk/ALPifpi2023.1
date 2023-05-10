let n1 = Number(prompt("Digite a nota 1"));
let n2 = Number(prompt("Digite a nota 2"));
let media = (n1+n2)/2;
if(media<7){x="reprovado"}else{x="aprovado"};
document.write(`O aluno foi ${x}.`);