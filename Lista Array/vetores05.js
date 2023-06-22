let vetor = []

for(let i=0;i<10;i++){
    vetor[i] = Number(prompt(`Digite o número de posição ${i+1}`))
}

for(let i=9;i>=0;i--){
    document.write(vetor[i] + "<br>")
}