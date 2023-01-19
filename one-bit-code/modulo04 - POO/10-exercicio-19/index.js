const Author = require('./Author');

const john = new Author('John Doe');

const post = john.writePost(
  'Título do post',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid...'
);

post.addComment('Isaac Pontes', 'Muito bom!');
post.addComment('Lucas', 'Achei interessante');

console.log(john);
console.log(post);
