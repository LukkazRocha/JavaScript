let saldo = parseFloat(prompt('Saldo inicial: '))
let opt = "0"

do {
    opt = prompt('Saldo atual: ' + 'R$' + saldo + '\n\n' +
                'Digite 1: Adicionar Dinheiro\n' +
                'Digite 2: Sacar Dinheiro\n' +
                'Digite 0: Encerrar atendimento')
    switch (opt) {
        case "1":            
            saldo += parseFloat(prompt("Qual valor será adicionado?"))
            break
        case "2":             
            saldo -= prompt("Qual valor será retirado?")
            if (saldo < 0) {
                alert("Saldo insuficiente, encerrando atendimento.")
                opt = "0"
            }
            break
        case "0":
            alert("Encerrando atendimento...")
            break
        default:
            alert("Opção inválida!")
    }    
} while (opt != "0")

alert("Atendimento encerrado!")