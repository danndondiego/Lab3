export class Product {
    id: number;
    name: string;
    price: number;
    quantity: number = 1;
  
    constructor(name: string, price: number) {
      this.id = Math.floor(Math.random() * 1000);
      this.name = name;
      this.price = price;
    }
  
    updateQuantity(newQuantity: number) {
      this.quantity = newQuantity;
    }
  }