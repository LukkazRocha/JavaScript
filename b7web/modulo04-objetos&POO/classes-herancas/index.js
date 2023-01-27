class Person {
  age = 0;

  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(`${this.name} diz OI`);
  }
}

class Student extends Person {
  constructor(name, id) {
    super(name);
    this.id = id;
  }

  sayHello() {
    super.sayHi();
  }
}

const p1 = new Student('Lucas', 1);
p1.age = 20;

p1.sayHello();
