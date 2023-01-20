class Account {
  #password;
  #balance = 0;

  constructor(user) {
    this.email = user.email;
    this.#password = user.password;
  }

  getBalance(email, password) {
    if (this.#authenticate(email, password)) {
      return this.#balance;
    } else {
      return null;
    }
  }

  #authenticate(email, password) {
    return this.email === email && this.#password === password;
  }
}

const user = {
  email: 'lucas@gmail.com',
  password: '123456'
};

const MyAccount = new Account(user);

console.log(MyAccount);
console.log(MyAccount.getBalance('lucas@gmail.com', '123456'));
