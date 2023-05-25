let stt = Number(prompt("Digite um número"))
let end = Number(prompt("Digite outro número"))

if(stt>end){
    [stt,end] = [end,stt]
}
for(i=stt;i<=end;i++){
    document.write( i + "<br>")
}