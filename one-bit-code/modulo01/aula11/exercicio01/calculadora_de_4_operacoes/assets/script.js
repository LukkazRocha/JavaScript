let num1 = prompt("Insira um número: ")
let num2 = prompt("Insira outro número: ")

num1 = parseFloat(num1)
num2 = parseFloat(num2)

let soma = num1 + num2
let sub = num1 - num2
let mult = num1 * num2
let div = num1 / num2

alert('O resultado das operações é: '
    + '\nSoma: ' + soma
    + '\nSubtração: ' + sub
    + '\nMultiplicação: ' + mult
    + '\nDivisão: ' + div)