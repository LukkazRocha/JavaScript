function clicou() {
  const input = document.querySelector('input');
  const botao = document.querySelector('.botao');

  if (input.getAttribute('type') === 'text') {
    input.setAttribute('type', 'password');
    // botao.setAttribute('value', 'Mostrar senha');
    botao.value = 'Mostrar senha';
  } else {
    input.setAttribute('type', 'text');
    // botao.setAttribute('value', 'Ocultar senha');
    botao.value = 'Ocultar senha';
  }
}

document.querySelector('.botao').addEventListener('click', clicou);
