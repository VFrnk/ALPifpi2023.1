let soma = 0
let quant = 0
let menorTemp = null
let maiorTemp = null

while(true){
    temp = Number(prompt("Digite a temperatura"))
    if(temp == ""){
        break
    }else{
        soma = soma + temp
        quant++
        if(temp<menorTemp){
            menorTemp = temp
        }
        if(temp>maiorTemp){
            maiorTemp = temp
        }
    }
}
let media = soma/quant

document.write(`Maior temperatura: ${maiorTemp} <br>`)
document.write(`Menor temperatura: ${menorTemp} <br>`)
document.write(`Media das temperaturas: ${media.toFixed(2)} <br>`)
