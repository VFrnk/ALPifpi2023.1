let a = Number(prompt("Digite o valor 1"));
let b = Number(prompt("Digite o valor 2"));
let c = Number(prompt("Digite o valor 3"));

if(a==b && b==c){
    document.write(`Os números são iguais.`);
}else{
    if(a>b && a>c){document.write(a)}
    if(b>a && b>c){document.write(b)}
    if(c>a && c>b){document.write(c)}
}