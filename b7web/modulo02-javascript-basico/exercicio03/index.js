const validar = (usuario, senha) => {
  return usuario === 'pedro' && senha === '1234';
};

let usuario = 'lucas';
let senha = '1234';
let validacao = validar(usuario, senha);
validacao ? console.log('Acesso concedido.') : console.log('Acesso NEGADO!.');
