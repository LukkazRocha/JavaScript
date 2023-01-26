class Person {
  _age = 10;
  steps = 0;

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  takeAStep() {
    this.steps++;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  get age() {
    return this._age;
  }

  set age(x) {
    if (typeof x === 'number') {
      this._age = x;
    } else {
      console.log('age must be a number');
    }
  }
}

const p1 = new Person('João', 'Silva');
const p2 = new Person('Maria', 'Leite');
const p3 = new Person('Pedro', 'Duarte');

p1.age = 20;
console.log(`${p1.fullName} tem ${p1.age} anos`);
