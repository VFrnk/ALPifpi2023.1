let base = Number(prompt("Digite a base"))
let expoente = Number(prompt("Digite o expoente"))
let potencia = 1

for(i=1;i<=expoente;i++){
    potencia = potencia*base
}
document.write(potencia)