const url = 'https://jsonplaceholder.typicode.com/posts';

function clicou() {
  // GET, POST, PUT, DELETE
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      alert(data[0].title);
    })
    .catch(() => {
      alert('DEU RUIM');
    });
}

function inserir() {
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: 'Título de teste',
      body: 'Corpo de teste',
      userId: 2
    })
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
}

document.querySelector('#botao').addEventListener('click', clicou);
document.querySelector('#inserir').addEventListener('click', inserir);
