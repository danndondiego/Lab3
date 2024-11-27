import { Product } from "../domain/Product";
import { ProductRepository } from "../domain/ProductRepository";

export class InMemoryProductRepository implements ProductRepository {
  private products: Product[] = [];

  addProduct(name: string, price: number, quantity: number) {
    const product = new Product(name, price, quantity);
    this.products.push(product);
  }

  removeProduct(id: number) {
    this.products = this.products.filter((product) => product.getId() !== id);
  }

  getProduct(id: number): Product | undefined {
    return this.products.find((product) => product.getId() === id);
  }

  getAllProducts(): Product[] {
    return this.products;
  }

  modifyNameProduct(id: number, newName: string) {
    const product = this.getProduct(id);
    if (product) {
      product.updateName(newName);
    }
  }

  modifyPriceProduct(id: number, newPrice: number) {
    const product = this.getProduct(id);
    if (product) {
      product.updatePrice(newPrice);
    }
  }

  modifyQuantityProduct(id: number, newQuantity: number) {
    const product = this.getProduct(id);
    if (product) {
      product.updateQuantity(newQuantity);
    }
  }
}