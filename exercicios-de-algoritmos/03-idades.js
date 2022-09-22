/* Problema "idades"
Fazer um programa para ler o nome e idade de duas pessoas. Ao final mostrar uma mensagem com os
nomes e a idade média entre essas pessoas, com uma casa decimal, conforme exemplo.  */

let nome1 = "Maria";
let nome2 = "João";
let idade1 = 19;
let idade2 = 20;
let media = (idade1 + idade2) / 2;

console.log(`
    Nome: ${nome1}
    Idade: ${idade1}
    
    Nome: ${nome2}
    Idade: ${idade2}
    
    Media: ${media}`);