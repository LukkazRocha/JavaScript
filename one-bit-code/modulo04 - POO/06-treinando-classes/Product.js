class Product {
  constructor(name, description, price) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.inStock = 0;
  }

  addToStock(quantity) {
    this.inStock += quantity;
  }

  calculateDiscount(percentage) {
    return (this.price * (100 - percentage)) / 100;
  }
}

const ps5 = new Product('Playstation 5', 'Console de mesa', 4500);

ps5.addToStock(10);
const priceWithDiscount = ps5.calculateDiscount(10);

console.log(ps5);
console.log(priceWithDiscount);
