function adicionar(nome, ...novosNomes) {
  let novoConjunto = [...nomes, ...novosNomes];

  return novoConjunto;
}

let nomes = ['Lucas', 'Pedro'];

let outros = adicionar(nomes, 'Antonio', 'Maria', 'José');

console.log(outros);
