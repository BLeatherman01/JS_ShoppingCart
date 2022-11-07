class Product {
  item;
  price;

  constructor(item, price) {
    this.item = item;
    this.price = price;
  }
}

const products = [];

products[0] = new Product('Milk', 2.99);
products[1] = new Product('Ice Cream', 3.99);
products[2] = new Product('Beer', 9.99);

const cart = [];

let goAgain = true;
while (goAgain === true) {
  console.log('products', products);

  const input = prompt(
    'What item would you like to see? 1 to ' + products.length
  );
  const selection = products[input - 1];
  console.log('selection:', selection);

  const userInput = prompt('Would you like the item added to your cart? Y/N');
  console.log('userinput', userInput);

  if (userInput === 'y') {
    cart.push(selection);
    console.log('cart', cart);
    checkout();
  } else {
    checkout();
  }

  goAgain = keepRunning();
}

function keepRunning() {
  const answer = prompt('Would you like to add another item? Y/N');

  if (answer === 'n') {
    return false;
  } else if (answer === 'y') {
    return true;
  } else {
    console.log("I'm sorry I didn't understand that let's try again");
    return keepRunning();
  }
}

function checkout() {
  let sum = 0;

  cart.forEach((item) => {
    sum += item.price;
    console.log(item.item, item.price);
  });

  console.log('Total sum', sum);
}
