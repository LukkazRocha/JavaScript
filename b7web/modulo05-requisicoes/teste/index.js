const url = 'https://jsonplaceholder.typicode.com/posts';

// async function clicou()
// const clicou = async () => {

const clicou = async () => {
  // GET, POST, PUT, DELETE
  try {
    let response = await fetch(url);
    let data = await response.json();
    alert(`Título do primeiro post: ${data[0].title}`);
  } catch (error) {
    console.log('DEU RUIM, ' + error.message);
  }

  alert('CLICOU');

  // fetch usando .then
  /* fetch(url)
    .then((response) => response.json())
    .then((data) => {
      alert(`Título do primeiro post: ${data[0].title}`);
    });

  alert('CLICOU'); */
};

const inserir = async () => {
  try {
    let response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: 'Título de teste',
        body: 'Corpo de teste',
        userId: 2
      })
    });
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log('DEU RUIM, ' + error.message);
  }

  // fetch usando .then
  /* fetch(url, {
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
    .then((response) => response.json())
    .then((data) => console.log(data)); */
};

document.querySelector('#botao').addEventListener('click', clicou);
document.querySelector('#inserir').addEventListener('click', inserir);
