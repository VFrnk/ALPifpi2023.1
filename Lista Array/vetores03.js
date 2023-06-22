let vetor = []

for(let i=0;i<8;i++){
    vetor[i] = Number(prompt(`Digite o número de posição ${i+1}`))
}

valor = Number(prompt("Digite o valor que deseja verificar"))

if(vetor.indexOf(valor) == -1){
    document.write("O valor não se encontra na lista")
}else{
    document.write("O valor se encontra na posição " + vetor.indexOf(valor))
}