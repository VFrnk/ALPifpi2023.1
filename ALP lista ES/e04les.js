let n1 = Number(prompt("Digite a nota 1"));
let n2 = Number(prompt("Digite a nota 2"));
let n3 = Number(prompt("Digite a nota 3"));

let media = (n1 + n2 + n3)/3;

if(media>=7){
    document.write("O aluno foi aprovado.");
}
else if(media<7 && media>=5){
    document.write("O aluno ficou de recuperação.<br/>");
    let rec = Number(prompt("Digite a nota da recuperação"));
    let novamedia = (media + rec)/2
    x = novamedia<5?"reprovado":"aprovado";
    document.write(`O aluno terminou ${x}`);
}
else{
    document.write("O aluno foi reprovado.")
}