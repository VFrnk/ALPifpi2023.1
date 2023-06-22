let vetor = []
let pares = []
let impares = []

for(let i=0;i<10;i++){
    vetor[i] = Number(prompt(`Digite o número de posição ${i+1}`))
}

for(let i=0;i<10;i++){
    if(vetor[i]%2==0){
        pares.push(vetor[i])
    }else{
        impares.push(vetor[i])
    }
}
document.write(`Pares: ${pares} <br> Impares: ${impares}`)