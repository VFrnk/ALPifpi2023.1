let capital = Number(prompt("Digite o capital inicial"))
let juros = Number(prompt("Digite os juros a.m"))

for(i=1;i<=24;i++){
    montante = capital*(1 + juros/100)**i
    document.write(`${i}º mês: R$ ${montante.toFixed(2)} <br>`)
}

let lucro = montante - capital
document.write(`<hr> Lucro total: R$ ${lucro.toFixed(2)}`)