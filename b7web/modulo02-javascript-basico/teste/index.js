const maiorDeIdade = (idade) => (idade >= 18 ? true : false);

let idade = 14;
let verificacao = maiorDeIdade(idade);
console.log(verificacao);

verificacao ? console.log('Maior de idade') : console.log('Menor de idade');
