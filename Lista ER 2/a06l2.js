let n = Number(prompt("Digite um número (0 a 255)"))

if(n<0 || n>255){
    document.write("0 a 255, pls")
}else{
    for(i=7;i>=0;i--){
        if(n>=2**i){
            document.write("1")
            n = n - 2**i
        }else{
            document.write("0")
        }
    }
}