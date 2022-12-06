function adicionar() {
  const playerList = document.getElementById('players');

  const ul = document.createElement('ul');

  const positionLi = document.createElement('li');
  positionLi.innerText = "Posição do jogador"
  ul.appendChild(positionLi);

  playerList.append(ul)
}

function remover() {

}