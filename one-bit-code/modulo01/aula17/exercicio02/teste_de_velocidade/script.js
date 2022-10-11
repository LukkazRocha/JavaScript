let carr01 = prompt('Informe o nome do veículo:')
let velo01 = parseFloat(prompt('Informe a velocidade do veículo'))
let carr02 = prompt('Informe o nome de outro veículo:')
let velo02 = parseFloat(prompt('Informe a velocidade do veículo'))

alert('Veículo 1: ' + carr01
    + '\nVelocidade: ' + velo01 + 'km/h'
    + '\n\nVeículo 2: ' + carr02
    + '\nVelocidade: ' + velo02 + 'km/h')

    if (velo01 > velo02) {
        alert('O veículo ' + carr01 + ' é mais rápido!')
    } else if (velo02 > velo01) {
        alert('O veículo ' + carr02 + ' é mais rápido!')
    } else {
        alert('Ambos tem a mesma velocidade!')
    }