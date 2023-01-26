const input = document.querySelector('input');
const ul = document.querySelector('ul');

function add(e) {
  if (e.key === 'Enter' && input.value !== '') {
    const newLi = document.createElement('li');
    newLi.innerText = input.value;
    ul.append(newLi);

    input.value = '';
  }
}

input.addEventListener('keyup', add);
