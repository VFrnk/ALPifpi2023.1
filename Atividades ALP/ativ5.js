let rad = Number(prompt("Digite o raio da lata (cm)"));
let h = Number(prompt("Digite a altura da lata (cm)"));
vol = rad**2*h*3.1415;
document.write(`${vol.toFixed(2)} cm^3`);