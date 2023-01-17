function dobro(x) {
  alert("O dobro de " + x + " é " + x * 2);
}

// dobro(5)
// dobro(7)

// dobro()

function dizerOla(nome = "mundo") {
  alert("Olá, " + nome + "!");
}

// dizerOla("Lucas");
// dizerOla();

function soma(a, b) {
  alert("O resultado da soma é " + (a + b));
}

// soma(7, 6)

function criarUsuario(nome, email, senha, tipo = "admin") {
  const usuario = {
    nome,
    email,
    senha,
    tipo,
  };
  console.log(usuario);
}

function muitosParametros(nome, telefone, endereco, aniversario, email, senha) {
  //...
}

function objetoComoParametro(usuario) {
  usuario.nome
  usuario.email
}

const dadoDoUsuario = {
  nome: "Lucas",  
  email: "lukkaz@email.com",  
}

console.log(objetoComoParametro(dadoDoUsuario))