let n = Number(prompt("Digite um número natural"))
let ehPrimo = true

if(n<0){
    document.write("NATURAL, POR FAVOR!")
}else if(n<2){
    document.write(`O número ${n} não é primo.`)
}else{
    for(i=2;i<=Math.sqrt(n);i++){
        if(n%i==0){
            ehPrimo = false
            break
        }else{
            ehPrimo = true
        }
    }
    if(ehPrimo){
        document.write(`O número ${n} é primo`)
    }
    else{
        document.write(`O número ${n} não é primo`)
    }
}