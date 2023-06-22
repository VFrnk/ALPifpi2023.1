let numeros = []
let soma = 0

for(let i=0;i<10;i++){
    numeros[i] = Number(prompt(`Digite o número de posição ${i+1}`))
}

for(let i=0;i<numeros.length;i++){
    soma += numeros[i] 
}

document.write(soma)