let ano = Number(prompt("Digite um ano:"));
if(ano%100==0){
    document.write(`O ano ${ano} é do século ${Math.floor(ano/100)}.`)
}else{
    document.write(`O ano ${ano} é do século ${Math.floor(ano/100)+1}.`)
};