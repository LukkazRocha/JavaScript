let cores = [
  { nome: 'Preto', qt: 10 },
  { nome: 'Azul', qt: 5 },
  { nome: 'Vermelho', qt: 15 }
];

/* cores.forEach((cor) => {
  console.log(cor);
});

for (let n = 0; n < cores.length; n++) {
  console.log(cores[n]);
}

for (let i in cores) {
  console.log(cores[i]);
} */

for (let cor of cores) {
  console.log(cor.nome);
}
