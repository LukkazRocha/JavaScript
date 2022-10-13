let opt = "0"

do {
    opt = prompt('MENU: \n' +
    'Digite 1: Ação 1\n' +
    'Digite 2: Ação 2\n' +
    'Digite 3: Ação 3\n' +
    'Digite 4: Ação 4\n' +
    'Digite 0: Encerrar\n')

    switch (opt) {
        case "1": alert("Executando ação 1")
        break
        case "2": alert("Executando ação 2")
        break
        case "3": alert("Executando ação 3")
        break
        case "4": alert("Executando ação 4")
        break
        case "0":
            alert("Você escolheu encerrar!")
            break
        default:
            alert("Opção inválida!")
    }
} while (opt != "0") 

alert("Programa Encerrado...")
