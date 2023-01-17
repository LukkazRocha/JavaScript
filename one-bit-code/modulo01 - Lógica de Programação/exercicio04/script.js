const nome = prompt("Insira seu nome:")
let resp = prompt("Já visitou alguma cidade? (Sim/Não)")
let cidade = ""
let cont = 0

if (resp === "Sim") {
    cont++
    cidade = prompt("Qual o nome da cidade?")
    resp = prompt("Visitou mais alguma cidade?")
    while (resp === "Sim") {
        cidade = cidade + ", " + prompt("Qual o nome da cidade?") 
        cont++
        resp = prompt("Visitou mais alguma cidade?")
    }
    alert(
        "Cidades que " + nome + " visitou:\n" + cidade +
        ".\nTotal: " + cont + " cidades.")
} else {
    alert("Obrigado pela atenção!")
}


/* RESOLUÇÃO DO PROFESSOR:
const turista = prompt("E aí, turista!, Qual o seu nome?")
let cidades = ""
let contagem = 0

let continuar = prompt("Você visitou alguma cidade? (Sim/Não)")

while (continuar === "Sim") {
    let cidade = prompt("Qual é o nome da cidade visitada?")
    cidades += " - " + cidade + "\n"
    contagem++
    continuar = prompt("Você visitou alguma outra cidade: (Sim/Não)")
}

alert(
    "Turista: " + turista +
    "\nQuantidade de cidades visitadas: " + contagem +
    "\nCidades visitadas:\n" + cidades
) */
