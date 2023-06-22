let vetor = []
let par = 0
let impar = 0

for(let i=0;i<10;i++){
    vetor[i] = Number(prompt(`Digite o número de posição ${i+1}`))
}

for(let i=0;i<10;i++){
    if(vetor[i]%2 == 0){
        par++
    }else{
        impar++
    }
}
document.write(vetor)
document.write("<br>")
document.write(`Pares: ${par}  Impares: ${impar}`)