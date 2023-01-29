let pessoa = {
  nome: 'Lucas',
  sobrenome: 'Rocha',
  idade: 28,
  social: {
    facebook: 'lukkaz',
    instagram: 'luukas'
  },
  nomeCompleto() {
    return `${this.nome} ${this.sobrenome}`;
  }
};

let { nome: pessoaNome, sobrenome, idade = 0 } = pessoa;
// com os : é possível declarar variáveis dentro de uma função e utilizando a atribuição é possível definir um valor padrão

console.log(pessoaNome, sobrenome, idade);
