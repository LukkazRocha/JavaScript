let carros = ['BMW', 'Ferrari', 'Mercedes'];
let x = 1;
console.log('1. ' + carros[x]);

console.log('2. Lista com Audi:');
// carros[1] = 'Audi';
carros.splice(1, 1, 'Audi');
console.log(carros);

console.log('3. Lista com Volvo:');
carros.push('Volvo');
console.log(carros);

console.log('4. itens no array:');
console.log(carros.length);
