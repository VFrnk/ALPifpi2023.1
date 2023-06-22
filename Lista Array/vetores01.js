let numeros = []
for(let i=0;i<10;i++){
    valor = Number(prompt(`Digite o valor de posição ${i+1}`))
    numeros[i] = valor**2
}
document.write(numeros)