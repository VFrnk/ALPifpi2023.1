let n;
while(true){
    n = Number(prompt("Digite a nota"))
    if((n>=0 && n<=10) && n!=""){
        break
    }
    alert("nota inválida")
}
document.write(`Parabéns, sua nota é ${n}`)