let pessoa = {
  nome: 'Lucas',
  sobrenome: 'Rocha',
  idade: 28,
  social: {
    facebook: 'lukkaz',
    instagram: {
      url: '@luukaz',
      seguidores: 1000
    }
  }
};

/* let {
  nome,
  idade,
  social: {
    instagram: { url: instagram, seguidores }
  }
} = pessoa;

console.log(nome, idade, instagram, seguidores); */

function pegarNomeCompleto({
  nome: pessoaNome,
  sobrenome = 'Souza',
  social: {
    instagram: { url: instagram }
  }
}) {
  return `${pessoaNome} ${sobrenome} (Siga em ${instagram})`;
}

console.log(pegarNomeCompleto(pessoa));
