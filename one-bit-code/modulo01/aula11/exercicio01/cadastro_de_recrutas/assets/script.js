let nome = prompt("Insira seu primeiro nome")
let sobrenome = prompt("Insira seu sobrenome:")
let campoDeEstudo = prompt("Insira seu campo de estudo: ")
let anoNasc = prompt("Em que ano você nasceu?")

let date = new Date()
let year = date.getFullYear()

let age = year - anoNasc

alert('Olá ' + nome + ' ' + sobrenome
    + '\nSua área de estudos é: ' + campoDeEstudo 
    + '\nSua idade é: ' + age)