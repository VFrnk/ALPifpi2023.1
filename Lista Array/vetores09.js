let alturas = []
let media = 0

for(let i=0;i<10;i++){
    alturas[i] = Number(prompt(`Digite o número de posição ${i+1}`))
    media += altura[i]/10
}

let superAltos = []
for(let i=0;i<10;i++){
    if(alturas[i] > media){
        superAltos.push(alturas[i])
    }
}
document.write(superAltos)