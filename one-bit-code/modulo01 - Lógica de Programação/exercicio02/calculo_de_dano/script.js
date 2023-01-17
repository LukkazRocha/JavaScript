const player1 = prompt('Insira o nome do personagem')
const atack = parseFloat(prompt('Qual o poder de ataque?'))

const player2 = prompt('Insira o nome do segundo personagem:')
let lifeP = parseFloat(prompt('Quantidade de pontos de vida:'))
const defense = parseFloat(prompt('Poder de defesa:'))
const escudo = prompt('Possui escudo? (Sim/Não)')

let danoCausado = 0

if (atack > defense && escudo === "Não") {
    danoCausado = atack - defense
} else if (atack > defense && escudo === "Sim") {
    danoCausado = (atack - defense) / 2
} 

lifeP -= danoCausado

alert(player1 + ' causou ' + danoCausado 
    + ' pontos de dano em ' + player2)
alert(player1 + '\nPoder de ataque: ' + atack + '\n\n'
    + player2 + '\nPontos de vida: ' + lifeP
    + '\nPoder de defesa: ' + defense + '\nPossui escudo: '
    + escudo)