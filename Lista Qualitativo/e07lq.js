let altura = Number(prompt("Digite a altura(m)"));
let massa = Number(prompt("Digite a massa(kg)"));

let imc = massa/(altura**2);

if(imc>40){
    document.write("Obesidade grau III")
}else if(imc>=35){
    document.write("Obesidade grau II")
}else if(imc>=30){
    document.write("Obesidade grau I")
}else if(imc>=25){
    document.write("Sobrepeso")
}else if(imc>=18.5){
    document.write("Peso normal")
}else{
    document.write("Abaixo do peso")
}