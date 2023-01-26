class Person {
  age = 0;
  steps = 0;

  constructor(name) {
    this.name = name;
  }

  takeAStep() {
    this.steps++;
  }

  setAge(newAge) {
    if (typeof newAge === 'number') {
      this.age = newAge;
    } else {
      console.log('Age must be a number');
    }
  }
}

const botao = document.querySelector('.botao').addEventListener('click', () => {
  p1.takeAStep();
  console.log(`Passos de ${p1.name}: ${p1.steps}`);
});

const p1 = new Person('João');
const p2 = new Person('Maria');
const p3 = new Person('Pedro');

p1.setAge('231');
console.log(p1);
