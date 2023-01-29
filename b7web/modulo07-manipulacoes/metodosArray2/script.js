let lista = [45, 4, 9, 16, 25];
let lista2 = [];
let obj = [
  { id: 1, nome: 'Lucas', sobrenome: 'Rocha', idade: 28 },
  { id: 2, nome: 'Pedro', sobrenome: 'Paulo', idade: 15 },
  { id: 3, nome: 'João', sobrenome: 'Carlos', idade: 20 },
  { id: 4, nome: 'Gabriel', sobrenome: 'Henrique', idade: 17 }
];

// res = lista.join(',');
// res = lista.toString();
//SAÍDA: Ovo,Farinha,Massa,Laranja

// res = lista.join(' - ');
//SAÍDA: Ovo - Farinha - Massa - Laranja

// lista.shift();
// Remove o primeiro elemento da lista

// lista.pop();
// Remove o último elemento da lista

// res = lista.splice(1, 0, 'Chocolate');
//SAIDA ['Ovo', 'Chocolate', 'Farinha', 'Massa', 'Laranja']

// lista.sort();
//SAIDA ['Farinha', 'Laranja', 'Massa', 'Ovo']

// lista.reverse();
//SAIDA ['Ovo', 'Massa', 'Laranja', 'Farinha']

// lista2 = lista.map((item) => {
//   return item * 2;
// });
//SAIDA [90, 8, 18, 32, 50]

// lista2 = lista.every((item) => {
//   return item > 3;
// });
//SAIDA true

// lista2 = lista.find((item) => item === 16);
//SAIDA 16

// let pessoa = obj.find((item) => item.id === 3);
//SAIDA {id: 3, nome: 'João', sobrenome: 'Carlos', idade: 20}

res = lista;

console.log(res);
