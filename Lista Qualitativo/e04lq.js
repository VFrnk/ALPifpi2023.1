let a = Number(prompt("Digite o coeficiente a:"));
let b = Number(prompt("Digite o coeficiente b:"));
let c = Number(prompt("Digite o coeficiente c:"));

delta = b**2 - 4*a*c
document.write(`Para a função f(x) = ${a}x^2 + (${b})x + (${c}).<br/> `)

if(delta<0){
    document.write(`Não há raiz real.`)
}else if(delta==0){
    r1 = -b/(2*a)
    document.write(`A raiz é ${r1.toFixed(2)}.`)
}else{
    r1 = (-b+delta**0.5)/(2*a)
    r2 = (-b-delta**0.5)/(2*a)
    document.write(`As raízes são ${r1.toFixed(2)} e ${r2.toFixed(2)}.`)
};