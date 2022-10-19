let opt = '';
let imoveis = [];

do {
    opt = prompt(
        'Quantidade de imóveis cadastrados: ' +
            imoveis.length +
            '\n\nDigite 1: Cadastrar um imóvel:' +
            '\nDigite 2: Listar imóveis' +
            '\nDigite 0: Sair'
    );

    switch (opt) {
        case '1':
            const imovel = {};

            imovel.proprietario = prompt('Nome do proprietário: ');
            imovel.quartos = parseInt(prompt('Quantos quartos?'));
            imovel.banheiros = parseInt(prompt('Quantos banheiros?'));
            imovel.garagem = prompt('O imóvel possui garagem? (Sim/Não)');

            const confirmacao = confirm(
                'Salvar este imóvel:\n' +
                    '\nProprietário: ' +
                    imovel.proprietario +
                    '\nQuartos: ' +
                    imovel.quartos +
                    '\nBanheiros: ' +
                    imovel.banheiros +
                    '\nPossui garagem? ' +
                    imovel.garagem
            );

            if (confirmacao) {
                imoveis.push(imovel);
            }

            break;
        case '2':
            for (let i = 0; i < imoveis.length; i++) {
                alert(
                    'Imóvel ' +
                        (i + 1) +
                        '\nProprietário: ' +
                        imoveis[i].proprietario +
                        '\nQuartos: ' +
                        imoveis[i].quartos +
                        '\nBanheiros: ' +
                        imoveis[i].banheiros +
                        '\nPossui garagem? ' +
                        imoveis[i].garagem
                );
            }
            break;
        case '0':
            alert('Encerrando...');
            break;
        default:
            alert('Opção inválida!');
    }
} while (opt !== '0');

console.log(imoveis);
