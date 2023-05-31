let termo1 = 1
let termo2 = 1
let n = Number(prompt("Digite a quantidade de elementos"))

for(i=1;i<=n;i++){
    document.write(`${termo1} <br>`)
    a = termo1
    termo1 = termo2
    termo2 = termo2 + a
}