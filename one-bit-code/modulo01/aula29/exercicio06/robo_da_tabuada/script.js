let num = parseFloat(prompt("Digite um número:"))
let tabuada = 0
let total = ''

for (let i = 0; i <= 20; i++) {    
    total += " -> " + num + " X " + i + "= " + (num * i) + '\n'
}

alert("Resuldado da tabuada de " + num + ':\n\n' + total)