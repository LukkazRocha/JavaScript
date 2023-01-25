function clicou() {
  const teste = document.querySelector('#teste');
  const ul = teste.querySelector('ul');

  // ul.innerHTML += "<li>Novo item</li>";

  let newLi = document.createElement('li');
  newLi.innerHTML = 'Novo item';

  ul.appendChild(newLi);
}

document.querySelector('.botao').addEventListener('click', clicou);
