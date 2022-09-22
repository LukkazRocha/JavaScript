/* Problema "terreno"
Fazer um programa para ler as medidas da largura e comprimento de um terreno retangular com uma
casa decimal, bem como o valor do metro quadrado do terreno com duas casas decimais. Em seguida,
o programa deve mostrar o valor da área do terreno, bem como o valor do preço do terreno, ambos com
duas casas decimais, conforme exemplo.  */

let larg = 12.0;
let comprim = 20.0;
let metroQuadrado = 150.00;
let area = larg * comprim;
let preco = area * metroQuadrado;

console.log(area.toFixed(2));
console.log(preco.toFixed(2));