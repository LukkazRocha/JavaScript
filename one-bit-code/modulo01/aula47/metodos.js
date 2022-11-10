let pessoa = {
  nome: "Lucas",
  idade: 28,
  dizerOla() {
    console.log(`Olá, Mundo! meu nome é ${this.nome} e eu tenho ${this.idade} anos`)
  }
};

console.log(pessoa);

pessoa.dizerOla();