let fila = [];
let opt = ""

do {
    let paciente = ""
    for (let i = 0; i < fila.length; i++) {
        paciente += (i + 1) + "º - " + fila[i] + "\n"
    }

    opt = prompt(
        "Lista de Pacientes:\n" + paciente +
        "\nMENU: \n" +
        "1 - Novo paciente\n" +
        "2 - Consultar paciente\n" +
        "0 - Sair")
    
    switch (opt) {
        case "1":
            fila.push(prompt("Insira o nome do paciente"))
            break
        case "2":
            let consultaPaciente = fila.shift()
            if (consultaPaciente) {
                alert(consultaPaciente + " foi consultado(a).")
            } else {
                alert("Não existem mais pacientes!")
            }
            break
        case "0":
            alert("Encerrando...")
            break
        default:
            alert("Opção inválida!")
    }
} while (opt !== "0")
