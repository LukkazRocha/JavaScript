document.querySelector('#menu-opener').addEventListener('click', () => {
  const menuArea = document.querySelector('#menu-area');

  menuArea.classList.toggle('active-menu');
});
