const url = 'https://jsonplaceholder.typicode.com/posts';
const posts = document.querySelector('#posts');

async function loadPosts() {
  posts.innerHTML = 'Carregando...';
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      montarBlog(data);
    });
}

function montarBlog(lista) {
  let html = '';

  lista.forEach((post) => {
    html += '<h3>' + post.title + '</h3>';
    html += '<p>' + post.body + '</p>';
    html += '<hr/>';
  });
  posts.innerHTML = html;
}
