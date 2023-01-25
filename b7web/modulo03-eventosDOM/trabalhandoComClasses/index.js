function tema() {
  const body = document.querySelector('body');

  body.classList.toggle('dark');
  body.classList.toggle('light');
}

function clicou() {
  const button = document.querySelector('.botao');

  /* if (button.classList.contains('azul')) {
    button.classList.remove('azul');
    button.classList.add('verde');
  } else {
    button.classList.add('azul');
    button.classList.remove('verde');
  } */

  button.classList.remove('azul');
  button.classList.add('verde');
}

document.querySelector('.botao').addEventListener('click', clicou);
document.querySelector('.mode').addEventListener('click', tema);
