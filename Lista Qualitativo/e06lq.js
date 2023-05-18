let x = Number(prompt("Digite a abscissa do centro"));
let y = Number(prompt("Digite a ordenada do centro"));
let r = Number(prompt("Digite o raio do círculo"));
let px = Number(prompt("Digite a abscissa do ponto"));
let py = Number(prompt("Digite a ordenada do ponto"));

dis = Math.sqrt((x-px)**2 + (y-py)**2)

if(dis>r){
    document.write(`O ponto (${px},${py}) não faz parte do círculo`)
}else{
    document.write(`O ponto (${px},${py}) faz parte do círculo`)
}
