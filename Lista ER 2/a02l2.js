let n = Number(prompt("Digite um número"))
let fatorial = 1

for(i=n;i>0;i--){
    fatorial = fatorial*i
}
document.write(`${n}! = ${fatorial}`)