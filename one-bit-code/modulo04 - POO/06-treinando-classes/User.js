class User {
  constructor(fullName, email, password) {
    this.fullName = fullName;
    this.email = email;
    this.password = password;
  }

  login(email, password) {
    this.email === email && this.password === password
      ? console.log('Login successfully')
      : console.log('Login failed');
  }
}

const lucas = new User('Lucas Rocha', 'luck140594@gmail.com', '123456');

console.log(lucas);

lucas.login('luck140594@gmail.com', '1234563');
