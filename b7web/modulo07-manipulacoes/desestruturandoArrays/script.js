let array = ['Lucas Rocha', 'Lucas', 'Rocha', '@luukas'];

const [, , , instagram] = array;

console.log(instagram);

function criar() {
  return [1, 2, 3];
}

let [a, b, c] = criar();

console.log(a, b, c);
