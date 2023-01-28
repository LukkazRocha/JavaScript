const url = 'https://jsonplaceholder.typicode.com/posts';

async function readPosts() {
  let postArea = document.querySelector('.posts');
  postArea.innerHTML = 'Carregando...';

  let response = await fetch(url);
  let data = await response.json();

  if (data.length > 0) {
    postArea.innerHTML = '';

    for (let i in data) {
      let postHtml = `<div><h1>${data[i].title}</h1>${data[i].body}<hr></hr></div>`;
      postArea.innerHTML += postHtml;
    }
  } else {
    postArea.innerHTML = 'Nenhum post para exibir!';
  }
}

async function addNewPost(title, body) {
  await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title,
      body,
      userId: 2
    })
  });

  document.querySelector('#titleField').value = '';
  document.querySelector('#bodyField').value = '';

  readPosts();
}

document.querySelector('#insertButton').addEventListener('click', () => {
  let title = document.querySelector('#titleField').value;
  let body = document.querySelector('#bodyField').value;

  if (title && body) {
    addNewPost(title, body);
  } else {
    alert('Preencha todos os campos!');
  }
});

readPosts();
