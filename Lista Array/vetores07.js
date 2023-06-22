let vetor = []

for(let i=0;i<10;i++){
    vetor[i] = Number(prompt(`Digite o número de posição ${i+1}`))
}

let menorValor = vetor[0]
for(let i=0;i<10;i++){
    if(vetor[i]<menorValor){
        menorValor = vetor[i]
        posicao = i
    }
}
document.write(`O menor valor do vetor é ${menorValor} e sua posição é ${posicao}`)