let opt = ""
const baralho = []

do {
    opt = prompt(
        "Quantidade de cartas: " + baralho.length + "\n\n" +
        "Digite 1 - Adicionar uma carta\n" +
        "Digite 2 - Puxar uma carta:\n" +
        "Digite 0 - Sair")

    switch (opt) {
        case "1":
            baralho.unshift(prompt("Nome da carta:"))
            break
        case "2":
            const cartaPuxada = baralho.shift()
            if (!cartaPuxada) {
                alert("Baralho vazio!")
            } else {
                alert("Carta puxada = " + cartaPuxada)
            }            
            break
        case "0":
            alert("Encerrando...")
            break
        default:
            alert("Opção inválida!")
    }

} while (opt !== "0")
