let a = Number(prompt("Digite um lado:"));
let b = Number(prompt("Digite um lado:"));
let c = Number(prompt("Digite um lado:"));

if(a<b+c && b<a+c && c<a+b){
    if(a==b && b==c){
        document.write("O triângulo é equilátero")
    }else if(a!=b && b!=c && a!=c){
        document.write("O triângulo é escaleno")
    }else{
        document.write("O triângulo é isósceles")
    }
}else{
    document.write("Esses lados não formam triângulo")
}