const Ecommerce = require('./index');

const store = new Ecommerce();

store.addProduct('Laptop', 1200);
store.addProduct('Phone', 800);

console.log('All Products:', store.listProducts());

store.addToCart(1);
store.addToCart(2);

console.log('Cart:', store.viewCart());

console.log('Total Price:', store.checkout());
console.log('Cart after checkout:', store.viewCart());
