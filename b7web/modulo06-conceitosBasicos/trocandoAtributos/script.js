let imagem = document.querySelector('.imagem');

function trocarImagem(fileName, animalName) {
  imagem.setAttribute('src', 'images/' + fileName);
  imagem.setAttribute('data-animal', animalName);
}

function pegarAnimal() {
  alert(imagem.getAttribute('data-animal'));
}
