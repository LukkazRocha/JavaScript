const calcularImovel = (metragem, quartos) => {
  let m2 = 3000;
  switch (quartos) {
    case 1:
    default:
      return metragem * m2;
    case 2:
      return metragem * (m2 * 1.2);
    case 3:
      return metragem * (m2 * 1.5);
  }
};

let metragem = 123;
let quartos = 3;
let preco = calcularImovel(metragem, quartos);
console.log(`A casa custa R$ ${preco}`);
