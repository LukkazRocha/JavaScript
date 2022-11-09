const medida = parseFloat(prompt('Insira um valor em metros:'))
let resultado

const opt = parseInt(prompt('Digite uma opção:\n\n'
    + '1 - Milímetro (mm)\n'
    + '2 - Centímetro (cm)\n'
    + '3 - Decímetro (dm)\n'
    + '4 - Decâmetro (dam)\n'
    + '5 - Hectômetro (hm)\n'
    + '6 - Quilômetro (km)'))


switch (opt) {
    case 1:
        resultado = medida * 1000
        alert('Resultado\n' + medida + 'm' + ' = ' + resultado + 'mm')
        break
    case 2:
        resultado = medida * 100
        alert('Resultado\n' + medida + 'm' + ' = ' + resultado + 'cm')
        break
    case 3:
        resultado = medida * 10
        alert('Resultado\n' + medida + 'm' + ' = ' + resultado + 'dm')
        break
    case 4:
        resultado = medida / 10
        alert('Resultado\n' + medida + 'm' + ' = ' + resultado + 'dam')
        break
    case 5:
        resultado = medida / 100
        alert('Resultado\n' + medida + 'm' + ' = ' + resultado + 'hm')
        break
    case 6:
        resultado = medida / 1000
        alert('Resultado\n' + medida + 'm' + ' = ' + resultado + 'km')
        break
    default:
        alert('Opção Inválida!')
}

