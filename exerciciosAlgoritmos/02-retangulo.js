/* Problema "retangulo"
Fazer um programa para ler as medidas da base e altura de um retângulo. Em seguida, mostrar o valor
da área, perímetro e diagonal deste retângulo, com quatro casas decimais, conforme exemplos.  */

let base = 10.3;
let altura = 13.1;

let area = (base * altura).toFixed(4);
let perimetro = (2 * (base + altura)).toFixed(4);

// let diagonal = (Math.sqrt(Math.pow(base, 2) + Math.pow(altura, 2))).toFixed(4);
let diagonal = (Math.sqrt(base ** 2 + altura ** 2)).toFixed(4);

console.log(`
    Area: ${area}
    Perímetro: ${perimetro}
    Diagonal: ${diagonal}
`);