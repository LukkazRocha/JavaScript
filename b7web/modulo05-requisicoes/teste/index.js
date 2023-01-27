// https://jsonplaceholder.typicode.com/posts

function clicou() {
  // GET, POST, PUT, DELETE
  fetch('https://jsonplaceholder.typicode.com/posts')
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

document.querySelector('#botao').addEventListener('click', clicou);
