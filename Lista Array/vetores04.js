let vetor = []

for(let i=0;i<10;i++){
    vetor[i] = Number(prompt(`Digite o número de posição ${i+1}`))
}

for(let i=0;i<vetor.length;i++){
    document.write(`Posição: ${i+1}º | Elemento: ${vetor[i]} <br>`)
}