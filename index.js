class Ecommerce {
    constructor() {
      this.products = [];
      this.cart = [];
    }
  
    addProduct(name, price) {
      const product = { id: this.products.length + 1, name, price };
      this.products.push(product);
      return product;
    }
  
    listProducts() {
      return this.products;
    }
  
    addToCart(productId) {
      const product = this.products.find(p => p.id === productId);
      if (product) {
        this.cart.push(product);
        return product;
      }
      throw new Error('Product not found');
    }
  
    viewCart() {
      return this.cart;
    }
  
    checkout() {
      const total = this.cart.reduce((sum, product) => sum + product.price, 0);
      this.cart = []; // Clear cart after checkout
      return total;
    }
  }
  
  module.exports = Ecommerce;
  